// JavasScript Array Functions
console.log("JavasScript Array Functions...");

// Exercise 1
var classNames = [
  "Tomás Shiao",
  "Silvina Dardik",
  "Regina Molares",
  "Nahuel Correa",
  "Mónica Piatti",
  "Miriam",
  "Matias Guerrero",
  "Mateo Barreiros",
  "Mariel Castillo",
  "María Lorena",
  "Marco A. Lopez",
  "Luz Marina Pereira",
  "Lighuen Gerónimo",
  "Leonardo López",
  "Leandro Percivati",
  "Juan Carlos Soria",
  "Joseph Flores",
  "José Luis González",
  "Inés Ehulech",
  "Iara Baya",
  "Hernán",
  "German Nicolas Villalba",
  "Genaro Di Martino",
  "Francisco Gutiérrez",
  "Federico Viola",
  "Erik Cori",
  "Elizabeth Sainz",
  "Cristian Cahe",
  "Brisa Claros",
  "Amad Saed",
  "Alejandro Raffo",
  "Alejandro Belo",
  "Agustina Oficialdegui"
  ];

classNames.sort();
console.log("Primer elemento: " + classNames[0]);
console.log("Ultimo elemento: " + classNames[classNames.length - 1]);
console.log("");
console.log("Lista de nombres completa y ordenadada:");
console.log("---------------------------------------");
for (var i=0; i < classNames.length; i++){
  console.log(classNames[i]);
}

// Exercise 2
var classAges = [51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19];

console.log("");
console.log("Lista de edades completa:");
console.log("-------------------------");
var i = 0;
while (i < classAges.length) {
  console.log(classAges[i]);
  i++;
}

console.log("");
console.log("Lista de edades pares:");
console.log("----------------------");
i = 0;
while (i < classAges.length) {
  var age = classAges[i];
  if(age%2 == 0) {
    console.log(age);
  }
  i++;
}

console.log("");
console.log("Lista de edades pares (usando FOR):");
console.log("----------------------------------");
for (i=0; i < classAges.length; i++) {
  var age = classAges[i];
  if(age%2 == 0) {
    console.log(age);
  }
}

// Exercise 3
function lowestElement(array) {
  var lowest = 9e99;
  for (var i=0; i<array.length; i++){
    if (array[i] < lowest){
      lowest = array[i];
    }
  }
  console.log(lowest);
}

console.log("");
console.log("Elemento menor de un array:");
console.log("---------------------------");
var numeros = [36,35,34,33,32,31,30,51,50,27,26,25,24,23,49,48,47,46,45,44,37,29,28,22,21,20,19,43,42,41,40,39,38];
lowestElement(numeros);

// Exercise 4
function biggestElement(array) {
  var biggest = -9e99;
  for (var i=0; i<array.length; i++){
    if (array[i] > biggest){
      biggest = array[i];
    }
  }
  console.log(biggest);
}

console.log("");
console.log("Elemento mayor de un array:");
console.log("---------------------------");
biggestElement(numeros);

// Exercise 5
function elementAt(array, index) {
  var element;
  if(index < array.length && index >=0) {
    element = array[index];
  }
  else {
    element = "Error de indice";
  }
  console.log(element);
}

console.log("");
console.log("Elemento enesimo de un array:");
console.log("-----------------------------");
elementAt(numeros, -1);
elementAt(numeros, 10);
elementAt(numeros, 100);

// Exercise 6
function exitsElement(array, element){
  var encontrado = false;
  var i=0;
  while (i < array.length && !encontrado){
    encontrado = (element == array[i]);
    i++;
  }
  return encontrado;
}

function elementRepeats(array) {
  var repetidos=[];
  var repeticion = false;
  
  for (var i=0; i<(array.length -1); i++){
    if (!exitsElement(repetidos, array[i])){
      repeticion = false;
      for(var j = i+1; j < array.length; j++){
        if(array[i] == array[j]){
          repeticion = true;
        }
      }
      if(repeticion){
        repetidos.push(array[i]);
      }
    }
  }
  
  for(var i=0; i < repetidos.length; i++) {
    console.log(repetidos[i]);
  }
}

var lista = [3,6,67,6,23,11,100,8,93,0,6,17,24,7,1,33,45,6,28,33,23,12,99,100];
console.log("");
console.log("Elemento repetidos de un array:");
console.log("-------------------------------");
elementRepeats(lista);
