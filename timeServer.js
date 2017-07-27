ar net = require('net');
var dateFormat = require('strftime');

//Recordar que todo node es asíncrono. 

var puerto = Number(process.argv[2]);

var server = net.createServer(function onConnect(socket){
	var ahora = new Date();

	var dateAsString = dateFormat('%Y-%m-%d %H:%M',ahora);
	socket.write(dateAsString);
	socket.end("\n");
});
server.listen(puerto);