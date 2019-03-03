# TrivialLauncher
A Web based program launcher consisting of React frontend and Go backend

## Description
Trivial Launcher is as the name implies a trivial software launcher. It consists of a frontend and a backend parts and it can be used as 
a web based remote control for launching/stopping programs. I made this for my personal use, which will be launching 
games/emulators/programs/etc. remotely in my livingroom pc. 

## Frontend
```
TBA
```

## Backend

### Requirements:

- Go 10.0.0+

### Building a binary:
```
# set GOPATH i.e. here project in $HOME/go/src/TrivialLauncher
export GOPATH=$HOME/go/src

cd $HOME/go/src/TrivialLauncher/backend

# this will compile a backend binary
go build
```

### Running the binary:
```
./backend

2018/10/06/ 14:09:01 Starting Trivial Launcher backend at localhost:8080
```

### Configuration and launching / stopping programs
The programs you want to launch can be configured into the config.json file. The config.json can be requested with a GET operation to 
the endpoint /all 
```
wget -qO- http://localhost:8080/all

{"program":[{"name":"Madplay","endpoint":"/madplay","file":"madplay","args":"/home/user/Music/song.mp3"}
```
A program entity consists of four parameters: name, endpoint, file and args. 

Let's say I want to launch madplay and play some mp3 file, then I would configure parameters: { "name" : "Madplay", "endpoint" : 
"/madplay", "file" : "madplay", "args" "/home/user/Music/song.mp3" }. 

To test this and launch madplay, we will do a GET operation to the configured endpoint /madplay
```
wget -qO- http://localhost:8080/madplay &> /dev/null
```

For stopping an ongoing program execution, we can do a GET operation to a global endpoint /endCurrent
```
wget -qO- http://localhost:8080/endCurrent &> /dev/null

```
