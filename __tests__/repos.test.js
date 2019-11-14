const request = require ("request");
test("should  work",  done => {	  
	const options = {
		url: "http://localhost:8000/repos/1" ,
		method: "get",
		followRedirect : false,   
		encoding: null
	}; 
	let promise = new Promise((resolve,reject) => {
		request(options, async function (error, response, body) {
			if (error) {
				resolve(false);
			}
			if ( typeof response === "undefined") {
				resolve(false);
			}    
			if (response.statusCode !== 200) {
				resolve(false);
			}
			body = body.toString( );
			body = JSON.parse(body);
			resolve(body);
		});
        
	});
	promise.then(body => {
		console.log(body);
		expect(body.name).toBe("come on");
		done();
	});
    

});
