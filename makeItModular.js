var miModulo=require('./miModulo.js');

miModulo(process.argv[2],process.argv[3],function (error,data){
	if(error){		
		console.error("Hubo un error"+error);
	}
	data.forEach(function (file){
		console.log(file);
	});	
}
);