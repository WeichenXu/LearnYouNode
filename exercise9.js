var counter = 3;
var str1, str2, str3;
var bl1 = require('bl'), bl2 = require('bl'), bl3 = require('bl');
function checkCounter(){
	if(!counter){
		console.log(str1+'\n'+str2+'\n'+str3);
	}
}
var httpGet1 = require('http').get(process.argv[2], function (res){
	res.setEncoding('utf-8');
	res.pipe(bl1(function(err,data){
		str1 = data.toString();
		counter --;
		checkCounter();
	}));
});
var httpGet1 = require('http').get(process.argv[3], function (res){
	res.setEncoding('utf-8');
	res.pipe(bl2(function(err,data){
		str2 = data.toString();
		counter --;
		checkCounter();
	}));
});
var httpGet1 = require('http').get(process.argv[4], function (res){
	res.setEncoding('utf-8');
	res.pipe(bl3(function(err,data){
		str3 = data.toString();
		counter --;
		checkCounter();
	}));
});
/*
	function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)

*/