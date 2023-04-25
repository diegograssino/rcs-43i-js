// 1)
// Una en uno solo los strings "La vida es" y "bella", muestre el resultado por consola y con un alert.
// const string1 = 'La vida es';
// const string2 = 'bella 2';
// const envioGratis = true;
// console.log(string1 + ' ' + string2);
// alert(string1 + ' ' + string2);
// console.log('Otra línea');
// props

// Ahora utilice template literals para hacer lo mismo.
// console.log(
//   `El envío es ${
//     envioGratis
//       ? 'Envio Gratis'
//       : 'Envio NO Gratis'
//   }`
// );

// Lleve una cadena de caracteres en minuscula a mayusculas.
// const stringMinuscula = 'esto esta en minúsculas';
// console.log(stringMinuscula);
// console.log(stringMinuscula.toUpperCase());

// // Lleve una cadena de caracteres en mayúscula a minúsculas.
// const lobelto = 'ESTO ESTA EN MAYUSCULAS';
// console.log(lobelto);
// console.log(lobelto.toLowerCase());

// mail@gmail.com
// Mail@gmail.com
// MAIL@GMAIL.com

// Indique el largo de una cadena de caracteres ingresada con prompt y muestre el resultado con un alert.

// Del mismo string, extraiga las últimas dos letras.

// 3)
// Truncar un número no entero.

// const number1 = 10.123456666;
// console.log(number1);
// console.log(Math.trunc(number1));

// Redondear al más cercano un número no entero

// const number2 = 3.5;
// console.log(number2);
// console.log(Math.round(number2));

// Devuelva el máximo valor de 5 variables (1, 5, 100, 2, 10)
// const max = Math.max(1, 5, 1000, 2, 10);
// console.log(max);

// Con las mismas variables, devuelva el mínimo
// const min = Math.min(3, 5, 1000, 2, 10);
// console.log(min);

// Ahora calcule la raiz cuadrada de 12
// const numeric = 12.56;
// console.log('El número es : ' + numeric);
// const trunc = Math.trunc(numeric);
// console.log('El número truncado es: ' + trunc);
// const raiz = Math.sqrt(trunc);
// console.log(
//   'La raíz cuadrada de el número truncado es: ' +
//     raiz
// );
// const raizTrunc = raiz.toFixed(2);
// console.log(
//   'La raíz cuadrada de el número truncado con solo dos decimales es: ' +
//     raizTrunc
// );

// console.log('El número es : 12.56');
// console.log(
//   'El número truncado es: ' + Math.trunc(12.56)
// );
// console.log(
//   'La raíz cuadrada de el número truncado es: ' +
//     Math.sqrt(Math.trunc(12.56))
// );
// console.log(
//   'La raíz cuadrada de el número truncado con solo dos decimales es: ' +
//     Math.sqrt(Math.trunc(12.56)).toFixed(2)
// );

// Calcule el resultado de 8 elevado a la 10ma potencia
// const base = prompt(
//   'Ingresa un número para potenciar'
// );
// console.log(base);
// const exponente = prompt('Ingresa el exponente');
// const resultado = Math.pow(
//   parseInt(base),
//   parseInt(exponente)
// );

// alert(
//   `El número ${base} elevado al número ${exponente} es ${resultado}`
// );

// Sume el número 10 con uno generado aleatoriamente

// A ese número redondearlo a dos decimales

// 4)
// Dado un número, indicar si ese número es mayor a 10.

// Dado un número, indicar si ese número es menor o igual a 10.

// Dado un número, indicar si ese número es par.

// Dado un número, indicar si ese número es impar.

// Ante un valor ingresado, indicar si tiene contenido.

// 5)

// Dado un número, indicar si ese número es mayor o menor o igual
// a 10.

// Null no es lo mismo que un dato undefined
// let foo;
// console.log(typeof foo);
// let fooNull = null;
// console.log(typeof fooNull);
// let fooTyped = '';
// console.log(typeof fooTyped);

// Dado un número, indicar si ese número es par o impar.
// const number = prompt('Ingrese un número');
// const modNumber = number % 2;

// if (modNumber === 0) {
//   alert('El número es par');
// }

// if (modNumber != 0) {
//   alert('El número es impar');
// }

// if (modNumber === 0) {
//   alert('El número es par');
// } else {
//   alert('El número es impar');
// }

// Dados dos números, indicar cual es el mayor.

// const number1 = prompt('Ingrese un número');
// const number2 = prompt('Ingrese otro número');

// if (number1 > number2) {
//   alert('El número mayor es: ' + number1);
// } else if (number1 === number2) {
//   alert('Son iguales');
// } else {
//   alert('El número mayor es: ' + number2);
// }

// TAREA
// Ante un valor ingresado, indicar si tiene o no contenido.

// 6)

// Dados dos números, indicar cual es mayor o si son iguales.

// TAREA
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// TAREA
// 7)
// Crear un algoritmo que pida al usuario el diámetro de una rueda
// y su grosor (en metros) y realice las siguientes operaciones:

// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje
//“La rueda es para un vehículo grande”. Si es menor o igual a 1.4
// pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para
// un vehículo mediano”. Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es
//para un vehículo pequeño”.

// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”

// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.
const month = prompt('Ingrese un número de mes');

// if (month === '1') {
//   alert('Enero');
// } else if (month === '2') {
//   alert('Febrero');
// } else if (month === '3') {
//   alert('Marzo');
// } else {
//   alert('No es ni Enero, ni Febrero ni Marzo');
// }

// switch (month) {
//   case '1':
//     alert('Enero');
//     break;

//   case '2':
//     alert('Febrero');
//     break;

//   case '3':
//     alert('Marzo');
//     break;

//   default:
//     alert('No es ninguno de los casos');
//     break;
// }

// TAREA
// Solicitar un numero de día y mostrar el nombre del día

// TAREA
// 8)
// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día

// TAREA
// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.
