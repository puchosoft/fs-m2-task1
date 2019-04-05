// JavasScript String Functions
console.log("JavasScript String Functions...");

// Exercise 1
//---------------------------------------------
// Funcion que devuelve el reverso de un numero
//---------------------------------------------
function reverseNumber(num){
  var cadenaNum = String(num);
  var reverso="";

  for(var i = cadenaNum.length-1; i >= 0 ; i--){
    reverso+=cadenaNum[i];
  }
  return(Number(reverso));
}

var numero = 123456789;
console.log("");
console.log("Reverso de un numero:");
console.log("---------------------");
console.log("El reverso de "+ numero +" es "+reverseNumber(numero));

// Exercise 2
//---------------------------------------------
// Funcion que
//---------------------------------------------
function orderString(string){
  var cadenaOrdenada = "";
  var caracter = '';
  string = string.toLowerCase(); // Pasa todo a minusculas

  for(var i=0; i < string.length; i++){
    caracter=string[i];
    if(caracter >= 'a' && caracter <= 'z'){ // Elimina todo lo que no sea alfabetico
      cadenaOrdenada+=caracter;
    }
  }

  if(cadenaOrdenada.length > 1){
    for(var i=0; i<cadenaOrdenada.length-2; i++){
      
      for(var j=i; j<cadenaOrdenada.length-1; j++){
        
        var c1=cadenaOrdenada[j];
        console.log(c1);
        var c2=cadenaOrdenada[j+1];
        console.log(c2);
        console.log("");
        if(c1>c2){
          cadenaOrdenada[j]=c2;
          cadenaOrdenada[j+1]=c1;
        }
      }
    }
  }
  
  return(cadenaOrdenada);
}

var cadena = "Cachorro";
console.log("");
console.log("Ordenamiento de un String:");
console.log("---------------------");
console.log("Ordenando \""+ cadena +"\" resulta \""+orderString(cadena)+"\"");
