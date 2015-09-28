var fs = require('fs');

module.exports = function(dirName, extName, cbFuntion){
		fs.readdir(dirName, function callback(err, data){
			if(err)	return cbFuntion(err);
			else{
				var retList = [];
				for(var i=0; i<data.length; i++){
					if(data[i].split('.')[1] == extName){
						retList.push(data[i]);
					}
				}
				return cbFuntion(null, retList);
			}
		}
	);}