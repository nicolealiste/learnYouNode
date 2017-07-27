var http=require('http');

module.exports=function myGetCollector(URL,callbackFn){
	var tmp="";
	http.get(URL,function callback(response){
		response.setEncoding('utf8');
		response.on("data",function(receivedData){
			tmp+=receivedData;			
		});
		response.on("end", function(){			
			callbackFn(tmp);
		});
	});
}