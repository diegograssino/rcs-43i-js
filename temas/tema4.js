// Declaración

// const fruta1 = 'manzana';
// const fruta2 = 'pera';
// const fruta3 = 'uva';
// const fruta4 = 'banana';

// const fruits = [
//   'manzana',
//   'pera',
//   'uva',
//   'banana',
// ];

// const fruits = [fruta1, fruta2, fruta3, fruta4];

// console.log(fruits);
// JSON

// const dnis = [
//   27049,
//   314266,
//   910705,
//   'danygeronimocbu',
//   {
//     tipo: 'objeto',
//     spoiler: 'Lo vas a amar y a odiar',
//   },
// ];
// console.log(dnis);

// Acceder a los distintos elementos por su indice
// const palabras = [
//   'lorem',
//   'ipsum',
//   'amet',
//   'lorem',
// ];

// console.log(palabras[3]);

// Cantidad de elementos o largo
// const palabras = [
//   'lorem',
//   'ipsum',
//   'amet',
//   'lorem',
//   'Roberto',
//   123,
// ];

// console.log(palabras.length);

// Recorrer con for
// const palabras = [
//   'lorem',
//   'ipsum',
//   'amet',
//   'lorem',
//   'Roberto',
//   123,
// ];

// for (
//   let index = 0;
//   index < palabras.length;
//   index++
// ) {
//   const element = palabras[index];
//   console.log(element);
// }

// FOREACH: Recorre un array <--- Solo recorre, no modifica ni devuelve otro valor.
// const palabras = [
//   ['1', 'ipsum', 'amet', 'lorem', 'Roberto', 123],
//   ['2', 'ipsum', 'amet', 'lorem', 'Roberto', 123],
//   ['3', 'ipsum', 'amet', 'lorem', 'Roberto', 123],
//   ['4', 'ipsum', 'amet', 'lorem', 'Roberto', 123],
// ];

// for (let i = 0; i < palabras.length; i++) {
//   for (let j = 0; j < palabras[i].length; j++) {
//     const element = palabras[i][j];
//     console.log(element);
//   }
// }

// palabras.forEach(palabra => {
//   palabra.forEach(p =>
//     console.log(p.length * 10)
//   );
// });

// console.log(palabras);

// MAP: Recorre un array y devuelve los que cumplen una condición <-- ME DEVUELVE UN NUEVO ARRAY CON LOS RESULTADOS

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros);

// const resultado = numeros.map(
//   numero => numero * 2
// );

// console.log(resultado);
// PUSH: Añadir elementos al final

// POP: Eliminar último elemento

// SHIFT: Eliminar primer elemento

// UNSHIFT: Agregar elementos al principio

// INDEXOF: Encontrar índice de un elemento por su valor (encuentra la primera coincidencia)

// SLICE: Extraigo una parte del array

// SPLICE + INDEXOF: Borro por valor

// REVERSE: Invertir elementos

// SORT: Ordena elementos

// FILTER:
