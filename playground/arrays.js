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
console.log("Lista completa de nombres:");
console.log("--------------------------");
for (var i=0; i < classNames.length; i++){
  console.log(classNames[i]);
}

// Exercise 2
