var fs=require('fs');
var path=require('path');

module.exports=function filterLs(dirName,extension,callback){
	fs.readdir(dirName,function lsCB(error,elementos){
	if(error){
		return callback(error);
	}
	resultado = new Array();

	elementos.forEach(function(file){
		if(path.extname(file) ==='.'+extension){
			resultado.push(file);
		}
	});
	callback(null,resultado);
	return;
});
}