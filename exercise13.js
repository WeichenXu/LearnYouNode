var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res){
	urlObject = url.parse(req.url, true);
	pathname = urlObject.pathname;
	isoTime = urlObject.search.split('=')[1];
	res.writeHead(200, {'Content-Type': 'application/json'});
	if(pathname === "/api/unixtime"){
		var date = new Date(isoTime);
		res.end(JSON.stringify({unixtime:date.getTime()}));
	}
	if(pathname === "/api/parsetime"){
		var date = new Date(isoTime);
		res.end(JSON.stringify({hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}));
	}
	
});
server.listen(process.argv[2]);