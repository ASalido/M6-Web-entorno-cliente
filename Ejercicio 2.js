
var cliente = new Array (3);
var sumtotal = 0;

for (var i = 0; i<3; i++){
  cliente[i] = new Array (3);
      for (var b = 0; b<4; b++){
        if (b == 1){
            cilente[i].push(b) = prompt("Introduce el nombre del cliente")
        }else if(b == 2){
            cliente[i].push(b)= prompt("Introduce el numero de cuenta");
        }else if(b==3)
            cliente[i].push(b) = prompt("Introduce el saldo");
        }else{
            if (cliente[i][3]> 0){
              cliente[i].push(b)='Acreedor';
              sumtotal= sumtotal + cliente[i][3];
            }else if(cliente[i][3]< 0){
              cliente[i].push(3)= 'Deudor';
            }else{
              cliente[i].push(3)= 'Nulo';
            }
        }
      }
}
