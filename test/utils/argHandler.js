const params = process.argv

function getCmdArgs(cmdVar){
	
	for(i=0;i<params.length;i++){
		if(params[i].includes('--'+cmdVar.toLowerCase())){
			return params[i].split(':')[1].toLowerCase()
		}	
	}
}
