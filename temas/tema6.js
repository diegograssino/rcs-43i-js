// console.log(
//   fraseOriginal.split(' ').reverse().join(' ')
// );
// function sum(number1, number2) {
//   return number1 + number2;
// }

// const num1 = 'asdasd';
// const num2 = 1;

// console.log(sum(num1, num2));
// console.log(sum(num1, num1));
// const fraseOriginal =
//   'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque t tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus';
// const fraseOriginal2 =
//   'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus';
// const fraseOriginal3 = 'Lor. Aliquam cursus';

// function paragraphInverter(paragraph) {
//   return paragraph.split(' ').reverse().join(' ');
// }

// console.log(paragraphInverter(fraseOriginal));
// console.log(paragraphInverter(fraseOriginal2));
// console.log(paragraphInverter(fraseOriginal3));
// console.log(paragraphInverter(fraseOriginal));

// console.log(paragraphInverter(fraseOriginal));

// const notas = [1, 2, 3];

// function promedio(notas) {
//   if (notas.length <= 0) {
//     return 'Array vacío';
//   } else {
//     const cantidadDeNotas = notas.length;

//     let sumaDeLasNotas = 0;
//     for (let i = 0; i < notas.length; i++) {
//       const element = notas[i];
//       sumaDeLasNotas = sumaDeLasNotas + element;
//     }

//     const value =
//       sumaDeLasNotas / cantidadDeNotas;
//     return value;
//   }
// }

// const aMostrar = promedio(notas);
// console.log(promedio(notas));
// // console.log(cantidadDeNotas);

// Sintaxis
// Scope
// Funciones flecha

// const arrowFunction = mensaje => {
//   if (mensaje.length > 0) {
//     return mensaje;
//   } else {
//     return 'Error';
//   }
// };

// () => {
//   console.log('Función anónima');
// };

// const mensaje = 'Esto es una IIFE'(mensaje => {
//   console.log(mensaje);
// })();

// Hacer una funcion que nos sirva de calculadora, o sea que haga las operaciones de suma, resta, division y multiplicacion de dos operandos.

// Querido amigo desarrolador, si esta función devuelve undefined, hiciste algo mal, sino devuelve un numbre con el resultado

// const calc = (num1, num2, operation) => {
//   let value = undefined;

//   if (
//     num1 &&
//     num2 &&
//     operation &&
//     typeof num1 === 'number' &&
//     typeof num2 === 'number' &&
//     typeof operation === 'string'
//   ) {
//     switch (operation.toUpperCase()) {
//       case 'SUM':
//         value = num1 + num2;
//         break;
//       case 'REST':
//         value = num1 - num2;
//         break;
//       case 'DIV':
//         value = num1 / num2;
//         break;
//       case 'MULT':
//         value = num1 * num2;
//         break;
//     }
//   }

//   return value;
// };

// console.log(calc('Uno', 2, 1));

// const array = [1, 2, 3];
// const cantantes = [
//   {
//     nombre: 'Roberto',
//     apellido: 'Sanchez',
//     profesion: 'cantante',
//     alias: 'Sandro',
//     edad: 70,
//     alive: false,
//     exitos: [
//       'Rosa rosa, la maravillosa',
//       'Trigal',
//       'Yo te amo',
//       'Nunca me faltes',
//     ],
//   },
//   {
//     nombre: 'Joaquin',
//     apellido: 'Sabina',
//     profesion: 'cantante',
//     alias: '',
//     edad: null,
//     alive: null,
//     exitos: [],
//   },
//   {
//     nombre: 'Roberto',
//     apellido: 'Darin',
//     profesion: 'actor',
//     alias: '',
//     edad: null,
//     alive: null,
//     exitos: [],
//   },
//   {
//     nombre: 'Jose Luis',
//     apellido: 'Darin',
//     profesion: 'estilista',
//     alias: '',
//     edad: null,
//     alive: true,
//     exitos: [],
//   },
// ];

// const key = 'nombre';

// console.log(cantantes[0].edad);
// console.log(cantantes[0][key]);

// const json = {
//   1: {
//     nombre: 'Ricardo',
//     1: '1',
//     2: '2',
//   },
//   2: {
//     nombre: 'Agustin',
//     1: '1',
//     2: '2',
//   },
//   3: {
//     nombre: 'Matias',
//     1: '1',
//     2: '2',
//   },
// };

// console.log(json[1].nombre);
