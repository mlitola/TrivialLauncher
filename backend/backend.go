package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"syscall"
)

type Programs struct {
	Programs []Program `json:"program"`
}

type Program struct {
	Name 		string `json:"name,omitempty"`
	Endpoint  	string `json:"endpoint,omitempty"`
	File   		string `json:"file,omitempty"`
	Args   		string `json:"args,omitempty"`
}

var configFile string = "./config.json"
var port = "8080"

var programs Programs

// open configFile and populate program list
func parseConfigFile() {
	file, err := os.Open(configFile)

	if err != nil {
		log.Fatal(err)
	}

	defer file.Close()

	bytes, _ := ioutil.ReadAll(file)

	json.Unmarshal(bytes, &programs)
}

// run the initialized command
func runCommand(cmd *exec.Cmd) {
	cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	cmd.Start()
}

// kill a running command process
func killCommand(cmd *exec.Cmd) {
	pgid, err := syscall.Getpgid(cmd.Process.Pid)
	if err == nil {
    		syscall.Kill(-pgid, 15) //weirdness of golang -> pgid is negative...
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
	parseConfigFile()

	var currentCommand *exec.Cmd
	var currentRunningProcess string

	// get all endpoint that gets the whole config json
	http.HandleFunc("/all", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		json.NewEncoder(w).Encode(programs)
	})

	// create other endpoints from the program array
	for i := 0; i < len(programs.Programs); i++ {
		bufName := programs.Programs[i].Name
		bufEndpoint := programs.Programs[i].Endpoint
		bufFile := programs.Programs[i].File
		bufArgs := programs.Programs[i].Args

		http.HandleFunc(bufEndpoint, func(w http.ResponseWriter, r *http.Request) {
			enableCors(&w)
			currentCommand = exec.Command(bufFile, bufArgs) // TODO: add support for more args
			currentRunningProcess = bufName
			log.Printf("Launching %s from an endpoint: %s\n", bufName, bufEndpoint)
			go runCommand(currentCommand)
		})
	}

	// end current command execution if one exists
	http.HandleFunc("/endCurrent", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		if currentCommand != nil {
			log.Println("Ending current process: " + currentRunningProcess)
			go killCommand(currentCommand)
		}
	})

	log.Printf("Starting Trivial Launcher backend at localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":" + port, nil))
}
