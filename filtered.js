var fs=require('fs');
var path=require('path');
var dirName=process.argv[2];
var extension=process.argv[3];
//console.log(dirName);
fs.readdir(dirName,function lsCB(error,elementos){
	if(!error){
		var numeroFicheros=0;

		elementos.forEach(function(file){
			if(path.extname(file) ==='.'+extension){
				console.log(file);
				numeroFicheros++;
			}
		});
	}
	//console.log("Encontrados("+extension+")"+numeroFicheros+" de "+elementos.length);
});