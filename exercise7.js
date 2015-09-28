var httpGet = require('http').get(process.argv[2], function (res){
	res.setEncoding('utf-8');
	res.on('data', function (chunk) {
    	console.log(chunk);
  	});
});
/*
	funciton (response) {
		response.setE...
		response.on('data', console.log);
		response.on('error', console.error);
	}
*/