var fs = require('fs');
var dirName = process.argv[2];
var extName = process.argv[3];
fs.readdir(dirName, function callback(err, data){
		if(!err){
			for(var i=0; i<data.length; i++){
				if(data[i].split('.')[1] == extName){
					console.log(data[i]);
				}
			}
		}
	}
);
