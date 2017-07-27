var http=require('http');
var fs=require('fs');

var puerto=Number(process.argv[2]);
var fileToServe=process.argv[3];

http.createServer(function procesar(req,resp){
	resp.writeHead(200,{'content-type':'text/plain'});
	fs.createReadStream(fileToServe).pipe(resp);
}).listen(puerto);