var bl = require('bl');
var httpGet = require('http').get(process.argv[2], function (res){
	res.setEncoding('utf-8');
	/*
	var strs = new Array();
	res.on('data', function (chunk){strs.push(chunk);});
	res.on('error', function (chunk){strs.push(chunk);});
	res.on('end', function (){
		console.log(strs.length+'\n');
		//strs.forEach(function (item){console.log(item);});
	});
*/
	res.pipe(bl(function(err,data){
		console.log(data.length);
		console.log(data.toString());
	}));
});