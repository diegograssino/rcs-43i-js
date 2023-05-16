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

// console.log(palabras.length);
// console.log(palabras[0]);

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
// REVERSE: Invertir elementos <-- MUTA EL ARRAY

// REPASO FUNCIONES DE STRING
// Invierta la palabra "abcdefghijk"
// const palabraOriginal = 'abcdefgbijk';
// console.log(
//   'La palabra original es: ' + palabraOriginal
// );

// const palabraSpliteada =
//   palabraOriginal.split('');
// console.log(palabraSpliteada);

// const palabraReverseada =
//   palabraSpliteada.reverse();
// console.log(palabraReverseada);

// const palabraJoineada =
//   palabraReverseada.join('');
// console.log(palabraJoineada);

// console.log(
//   'La palabra invertida es: ' +
//     palabraOriginal.split('').reverse().join('')
// );

// const fraseOriginal =
//   'Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus';

// console.log(
//   fraseOriginal.split(' ').reverse().join(' ')
// );

// MAP: Recorre un array y devuelve los que cumplen una condición <-- ME DEVUELVE UN NUEVO ARRAY CON LOS RESULTADOS

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros);

// const resultado = numeros.map(
//   numero => numero * 2
// );

// console.log(resultado);
// PUSH: Añadir elementos al final
// const array = ['1'];
// array.push('2');
// console.log(array);

// POP: Eliminar último elemento
// const array = ['1', '2'];
// array.pop();
// console.log(array);
// SHIFT: Eliminar primer elemento
// const array = ['1', '2'];
// array.shift();
// console.log(array);

// UNSHIFT: Agregar elementos al principio
// const array = ['1', '2'];
// array.unshift('0');
// console.log(array);

// SLICE: Extraigo una parte del array
// const array = ['1', '2', '3', '4'];
// console.log(array.slice(1, 3));

// SPLICE: Eliminar elementos según su posición <-- MUTA EL ARRAY

// const array = ['1', '2', '3', '4'];
// array.splice(2, 1);
// console.log(array);

// INDEXOF: Encontrar índice de un elemento por su valor (encuentra la primera coincidencia)
// const array = ['1', '1', '3', '4'];
// console.log(array.indexOf('1'));

// SPLICE + INDEXOF: Borro por valor
// const array = ['Maria', 'Lorena', 'Eliza', '4'];

// const index = array.indexOf('6');
// if (index != -1) {
//   array.splice(index, 1);
//   console.log(array);
// } else {
//   console.log('No hay coincidencia');
// }

// SORT: Ordena elementos

// FILTER: Filtra por una condición
// const nombres = [
//   'Maria',
//   'Lorena',
//   'Eliza',
//   'Ana',
// ];
// const result = nombres.filter(
//   nombre =>
//     nombre === 'Maria' && nombre.length > 8
// );
// console.log(result);
