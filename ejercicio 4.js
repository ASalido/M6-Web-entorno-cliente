var palabra = '05478542367980';
function codificar(palabra2){
	var cnt = palabra2.length();
	var cnt1= 0;

	while(cnt!= cnt1){
		if(palabra2(cnt1)='7'){
			palabra2(cnt1)='T';
		}else if(palabra2(cnt1)=='4'){
			palabra2(cnt1)='A';
		}else if(palabra2(cnt1)=='5'){
			palabra2(cnt1)='S';
		}else if(palabra2(cnt1)=='0'){
			palabra2(cnt1)='O';
		}
	}
	console.log(palabra2);
}

codificar(palabra);