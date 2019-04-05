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
//---------------------------------------------------------------
// Funcion que ordena alfabeticamente los caracteres de un string
//---------------------------------------------------------------
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

  if(cadenaOrdenada.length > 1){ // Si la cadena tiene mas de una letra ...
    cadenaOrdenada = cadenaOrdenada.split(""); // ... la convierte a array

    for(var j=1; j < cadenaOrdenada.length; j++){ // Ordenamiento por metodo de burbuja
      for(var i=0; i < cadenaOrdenada.length - j; i++){
        var c1=cadenaOrdenada[i];
        var c2=cadenaOrdenada[i+1];
        if(c1>c2){
          cadenaOrdenada[i]=c2;
          cadenaOrdenada[i+1]=c1;
        }
      }
    }
  }

  // Todo el IF anterior se puede reemplazar por las siguientes 2 lineas
  //cadenaOrdenada = cadenaOrdenada.split("");
  //cadenaOrdenada = cadenaOrdenada.sort();

  return(cadenaOrdenada.join("")); // Convierte a String y devuelve el resultado
}

var cadena = "WebMaster!";
console.log("");
console.log("Ordenamiento de un String:");
console.log("---------------------");
console.log("Ordenando \""+ cadena +"\" resulta \""+orderString(cadena)+"\"");

// Exercise 3
//---------------------------------------------------------------------
// Funcion que capitaliza la primera letra de cada palabra de un string
//---------------------------------------------------------------------
function capitalizeString(frase){
  var palabras = frase.split(" ");
  for(var i=0; i < palabras.length; i++){
    var letras=palabras[i].split("");
    var car = letras[0];
    if(car >= 'a' && car <= 'z'){
      car=String.fromCharCode(car.charCodeAt(0)-32);
      letras[0]=car;
    }
    palabras[i]=letras.join("");
  }
  return(palabras.join(" "));
}

var cadena = "prince of persia !";
console.log("");
console.log("Capitalizacion de un String:");
console.log("----------------------------");
console.log("capitalizando \""+ cadena +"\" resulta \""+capitalizeString(cadena)+"\"");

// Exercise 4
