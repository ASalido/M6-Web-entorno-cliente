var res='';
a=10;
if (a>2 && a<8){
	result='a es mayor';
}else{
	result='a es menor';
}
/*console.log("Train #" + 1 + " is running.");
console.log("Train #" + 2 + " is running.");
console.log("Train #" + 3 + " is running.");
console.log("Train #" + 4 + " is running.");
console.log("Train #" + 5 + " is running.");
console.log("Train #" + 6 + " is running.");
console.log("Train #" + 7 + " is running.");
console.log("Train #" + 8 + " is running.");*/

/*var totaltrains=12;
var trainsoperational=8;

for(var i = 0; i<= totaltrains; i++){
	if (i <=trainsoperational){
		console.log("Train #" + i + " is running.");
	}else{
		console.log("Train #" + i + " is not running.")
	}
}

alert ("I Have " + totaltrains + " trains");

var al;
al=confirm("Do you want to take the train?");
if (al)
{
	console.log("go buy the tix");
}else{
	console.log("go home")
}
*/
/*var name=prompt("Como te llamas?");
console.log("hola " + name);*/

// Para hacer un and &&
// Para hacer un OR ||

/*function arg (){
	var num_par=arguments.length;
	console.log(arguments);
	return num_par;
}
//console.log(arg(name));

document.write("El numero de parametros es "+arg(prompt(name))*/

/*function invocarysumar(a,b){
	return a() + b();
}

// a y ve son funciones.

function uno(){return 1;}
function dos(){return 2;}

document.write(invocarysumar(uno,dos));
document.write('\n');
document.write(invocarysumar(uno,function(){return 7;}));*/

//Closers:

/*var lol=[];

for (var i=0; i!= 5; i++){
	lol.push(prompt());
}

for(var i = 0; i != 5; i++){
	document.write(lol[i]);
}*/

// Un Array se puede crear de dos maneras
// var nomb =[];
// var nomb = new Array;

var nomb =[];
var ex=0;
var cnt = 0;
while (ex != 1){
	nomb.push(prompt());
	if (nomb[cnt] == "fin"){
		ex=1;
	}
	cnt++;
}
cnt=0;
ex=0;
while (ex != 1){
	
	if (nomb[cnt] == "fin"){
		ex=1;
	}else{
		document.write(nomb[cnt] + "<br>");
	}
	cnt++;
}

/* el anterior optimizado

var nombres=new Array;
do{
	nombre=prompt();
	nombres.push(nombre);
}while(nombre != "fin");

for(var i = 0; i<nombres.length; i++){
	document.write(nombres[i] + "<br>");
}