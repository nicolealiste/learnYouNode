var myGet=require('./migetCollector.js');


var count=0;
var buffer=[];

function procesar(index){
	myGet(process.argv[2+i],function(data){		
		buffer[index]=data;
		count++;
		if(count==3){
			for(j=0;j<count;j++){
				console.log(buffer[j]);
			}
		}

	});
}

for (i=0;i<3;i++){
	procesar(i);
}