var http=require('http');

var URL=process.argv[2];

http.get(URL, function callback(response){
	response.setEncoding('utf8');
	/*
	response.on("data",function (data){
		console.log(data)
	});
	response.on("error",function(data){
		console.error(data);
	});*/
response.on("data",console.log);
response.on("error",console.error);
});