/* const gato = {
    nombre: "Misifú",
    edad: 2,
    color: "gris",
    raza: "siamés",
    razaPadre: "siamés",
    razaMadre: "siamés"
  };
  
  let fruta = {
    nombre: "manzana",
    color: "rojo",
    sabor: "dulce",
    madurez: "madura",
  };
  
  
  let carro = {
    marca: ,
    modelo: ,
    año: ,
    color: ,
    matrícula: ,
  };

*/

const formularioGato = document.querySelector('#formulario-gato');
console.log(formularioGato);
const gatosRegistrados = [];

formularioGato.addEventListener('submit', function(event) {
event.preventDefault();

const nuevoGato = {

    nombre: document.querySelector('#nombreGato').value,
    edad: document.querySelector('#edadGato').value,
    color: document.querySelector('#colorGato').value,
    raza: document.querySelector('#razaGato').value,
    razaPadre: document.querySelector('#razaPadre').value,
    razaMadre: document.querySelector('#razaMadre').value
    };
    

    gatosRegistrados.push(nuevoGato);
    

    formularioGato.reset();
    

    console.log(gatosRegistrados);

});

const formularioCarro = document.querySelector('#formulario-carro');
console.log(ormularioCarro);
const carrosRegistrados = [];

formularioCarro.addEventListener('submit', function(event) {
event.preventDefault();

const nuevoCarro = {

    marca: document.querySelector('#marcaCarro').value,
    modelo: document.querySelector('#modeloCarro').value,
    año: document.querySelector('#anoCarro').value,
    color: document.querySelector('#colorCarro').value,
    matrícula: document.querySelector('#matriculaCarro').value,
    };
    

    gatosRegistrados.push(nuevoCarro);
    

    formularioCarro.reset();
    

    console.log(carrosRegistrados);

});
