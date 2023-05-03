// WHILE
// let i = 100;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// DO WHILE <--- Siempre se ejecuta al menos una vez

// let i = 10000;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// (condicionales compuestas &&, ||, !)
// Escriba un algoritmo que pueda evaluar si un número esta dentro del rango de 5 a 10.

// let i = 0;
// let exit = false;

// while (i < 3 && exit === false) {
//   // 1) Cargo en input un valor
//   const input = prompt('Quiere salir?');
//   // 2) Evaluo si input es igual a "OK", si es asi cambio exit a true
//   if (input.toUpperCase() === 'OK') {
//     exit = true;
//   }
//   // 3) Muestro por consola todas las variables (solo para verificar)
//   console.log(
//     `<></>`
//   );
//   // 4) Sumo 1 al contador
//   i++;
// }

// Simule un estado de logueo con usuario y contraseña y, solo si no esta logueado, muestre un mensaje de error repetitivo.

let exit = false;
const userOk = 'ROBERTO';
const passOk = 'Sandro';

// Version 1
// do {
//   // Solicito la data
//   const user = prompt('Ingrese su usuario:');
//   const pass = prompt('Ingrese contraseña:');
//   // Solicito la data
//   if (
//     user.toUpperCase() === userOk &&
//     pass === passOk
//   ) {
//     exit = true;
//     console.log('User y pass Ok');
//   }

//   // Aviso si se logueo
//   if (exit === true) {
//     alert('Logueado');
//   } else {
//     alert('Algo flota');
//   }
// } while (exit === false);

// Version 2
// let user = '';
// let pass = '';

// let userOk = 'rolling';
// let passOk = '1234';

// do {
//   user = prompt(
//     'Ingrese su usuario: '
//   ).toLowerCase();
//   pass = prompt('Ingrese su contraseña: ');
//   if (user === userOk && pass === passOk) {
//     alert('Autenticado!');
//   } else {
//     alert('Usuario o contraseña erroneos.');
//   }
// } while (user !== userOk || pass !== passOk);

// Simule un ingreso de un numero de telefono en un prompt y valide si el dato es correcto por la cantidad de digitos y repita el ingreso las veces que sea necesario.

// 2)

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10.

// for (defino el contador; condicion para terminar; suma o resta al final) {
//   console.log(index);
// }

// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre los numeros del 1 al 10 de mayor a menor.
// for (let index = 10; index >= 1; index--) {
//   console.log(index);
// }

// (AHORA CON FOR) Escribe un algoritmo que muestre si cada uno de los numeros del 1 al 10 son múltiplos de 2.

// Escribe un algoritmo que muestre solo los numeros pares del 1 al 10

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un juego de 10 preguntas y respuestas donde cada respuesta correcta sume un punto. Al final del juego debe mostrar cuantos puntos sumo el jugador.

// Genere CON LAS HERRAMIENTAS QUE TENEMOS HASTA AHORA un algoritmo que pida dos numeros y la operacion a realizar (+, -, *, /) y muestre el resultado. Validar que los datos ingresados sean correctos y volver a pedirlos si es necesario.
