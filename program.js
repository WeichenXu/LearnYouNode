var fileName = process.argv[2];
var fs =  require('fs');



fs.readFile(fileName, 'utf-8', function myCallback(err, data){
	if(!err){
		//console.log("did");
		console.log(data.split('\n').length-1);
	}
}
);