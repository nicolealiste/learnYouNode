var map = require('through2-map');
var http=require('http');

var puerto=new Number(process.argv[2]);
console.log(puerto);

var server = http.createServer(function procesar(req,resp){
	resp.writeHead(200,{'content-type':'text/plain'});
	if (req.method != 'POST'){
	    return res.end('send me a POST\n');
	}
	
	req.pipe(map(function (chunk) {
    	return chunk.toString().toUpperCase()
  	})).pipe(res);
});
server.listen(puerto);p
