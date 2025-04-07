//RESUELVE LOS EJERCICIOS AQUÍ

// 1.- Dado el objeto empleados, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];

// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com

const emailLuis = empleados[0].email;

// 3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

// Al final
// let a = 3;
// let b = 5;

// const object1 = {a: 5, b: 3};
// const object2 = {a: 3, b: 5};

// const mergeLista = {...lista1,...lista2};
// console.log(mergeLista)

[a,b] = [b,a]

console.log(a,b)

// 4.- Dado el objeto HIGH_TEMPERATURES Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {yesterday, today, tomorrow} = HIGH_TEMPERATURES;
  
const maximaHoy = today;
const maximaManana = tomorrow;
console.log(maximaHoy);
console.log(maximaManana);


// 5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...numbers) {
    return numbers.reduce((num1, num2) => num1 + num2, 0);
  }
  
sumEveryOther(1,2,3,4,5); 
sumEveryOther(1,2,3); 
sumEveryOther(1,1,1,1,1,1,1); 

// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).

function addOnlyNums(...numbers) {
    return numbers.filter(item => typeof item === 'number').reduce((num1, num2) => num1 + num2, 0);
  }
  
addOnlyNums(1, "perro", 2, 4); 
addOnlyNums(1,"perro", 6, "gato", "ratón", 7);
addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina");

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.


function countTheArgs(...args) {
    return args.length;
  }

countTheArgs(1,"perro", 6, "gato", "ratón", 7);
countTheArgs(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina");

//  8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(array1, array2) {

    const mergeArray = [...array1, ...array2];
    console.log(mergeArray);
    return mergeArray;
  }

combineTwoArrays([1, 2, 3], [4, 5, 6]); 
combineTwoArrays([1, 2], [3, 4, 5, 6]);
combineTwoArrays([1], [2, 3, 4, 5, 6]);


//  9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.


function onlyUniques(...array) {

    const arraySinDuplicados = [...new Set(array)];
    console.log(arraySinDuplicados);
   
    return arraySinDuplicados;
  }

onlyUniques("gato", "pollo", "cerdo", "cerdo"); 
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); 

//  10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

function combineAllArrays(...array) {

    console.log(array.flat());
    return array.flat();
  }

  combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); 
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12]);

//   Ejercicio 11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...args) {
    return args.reduce((sum, num) => sum + num ** 2, 0);
  }

sumAndSquare(1,2,3,4,5,6);
sumAndSquare(1,2,3,5);
