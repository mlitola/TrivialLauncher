class Request {
	constructor(method, url) {
		this.url = url;
		this.method = method;
		this.request = new XMLHttpRequest();
	}

	listen() {
		if (this.request.status >= 200 && this.request.status < 300)
		{
			// process data
			console.log('success');
		} 
		else
		{
			// error processing
			console.log('Oops, something went sour...');
		}		
	}

	execute() {
		this.request.open(this.method, this.url);
		this.request.send();
	}

	debug() {
		console.log(String(this.method) + ', ' + String(this.url));
	}
};

export default Request;
