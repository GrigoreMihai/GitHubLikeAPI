const request = require ("request");
test("should  work get on id",  done => {	  
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


test("should  work post",  done => {	  
	const options = {
		url: "http://localhost:8000/repos" ,
		method: "post",
		body : {
			name: "MyRepo",
			description: "Good code comments itself",
			userEmail :"some@some.com"
		},
		json : true
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
			// response.body = response.body[0];
			
			resolve(response.body);
		});
        
	});
	promise.then(body => {
		console.log(body);
		expect(body.name).toBe("MyRepo");
		done();
	});
    

});