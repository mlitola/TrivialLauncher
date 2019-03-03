class Request {
	makeRequest(method, url, done) {
		let request = new XMLHttpRequest();
	  	request.open(method, url);
  		request.onload = function () {
    		done(null, request.response);
  		};
		request.onerror = function () {
			done(request.response);
		};
  		request.send();	
	}
};

export default Request;
