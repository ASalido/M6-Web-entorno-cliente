var frase = new Array('pepelillo','Joselito','Torcuato','Sandalio','Fulgencio','Eleuterio','Anselmo');

function Palabras(frase2){

	var cnt1 = 0;
	var cnt = frase2[].length;
	var comp ;

	while (cnt1 != cnt){
		if (cnt1==0){
			comp = frase2[cnt1];
		}else if(comp.lentgh<frase2[cnt1].length){
			comp = frase2[cnt1];
		}
		cnt1++;
	}
	console.log(comp);
}

palabras(frase);
