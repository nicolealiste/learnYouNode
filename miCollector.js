var http=require('http');

var URL = process.argv[2];

var dataList=new Array();

http.get(URL, function callback(response){
	response.setEncoding('utf8');
	response.on("data",function (data){
		dataList.push(data);
	});
	response.on("end",function(){
		contenido="";
		dataList.forEach(function(elemento){
			contenido+=elemento;
		});
		console.log(contenido.length);
		console.log(contenido);
	});
});
