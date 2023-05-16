// 2)
const holaDom =
  document.getElementById('rolling');
// console.log(holaDom.innerHTML);
// const numbers = [1, 2, 3, 4];
// holaDom.innerHTML = `
// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// 	<li>4</li>
// </ul>`;

// const holaCode = document.querySelector('.code');
// console.log(holaCode);

// holaCode.className += ' roberto';
// holaCode.style.backgroundColor = '#000';
// holaCode.style.height = '500px';

// 3)

// 4)

console.log(holaDom.innerText);
// holaDom.innerText = 'Chau';
const elementoNuevo = document.createElement('p');
elementoNuevo.innerText = 'Bla';
console.log(elementoNuevo.innerText);
holaDom.appendChild(elementoNuevo);

// Mis datos, son un array de objetos
data = [
  { nombre: 'nombre1', precio: 1 },
  { nombre: 'nombre2', precio: 2 },
  { nombre: 'nombre3', precio: 3 },
];

// Recorro con forEach mis datos
data.forEach(d => {
  // Creo el elemento titulo
  const titulo = document.createElement('h4');
  // Le agrego el texto del nombre (para cada de los elementos del array)
  titulo.innerText = d.nombre;
  // Creo el elemento precio
  const precio = document.createElement('span');
  // Le agrego el texto del precio (para cada de los elementos del array)
  precio.innerText = d.precio;

  // Creo la card, pensada para contener a los otros dos
  const card = document.createElement('div');
  // Hago un append de titulo y precio
  card.appendChild(titulo);
  card.appendChild(precio);
  // Agrego los estilos
  card.style.border = '1px solid #000';
  // Finalmente al final de cada vuelta, agrego esa card con los datos que fui agregando
  holaDom.appendChild(card);
});

// Recorro con forEach mis datos
data.forEach(d => {
  const card = document.createElement('div');
  card.style.border = '1px solid #000';
  // card.innerHTML = `<h4>${d.nombre}</h4>
  // 									<span>${d.precio}</span>`;

  card.innerHTML = `
	<div class="card" style="width: 18rem;">
		<div class="card-title">${d.titulo}</div>
  <div class="card-footer">
    ${d.precio}
  </div>
</div>
	`;
  holaDom.appendChild(card);
});
