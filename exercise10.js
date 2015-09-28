var net = require('net');
var strfTime = require('strftime');
var server = net.createServer(function callback (socket){
	var date = new Date();
	//console.log();
	socket.end(strfTime('%F %R\n', date));
});
server.listen(process.argv[2]);