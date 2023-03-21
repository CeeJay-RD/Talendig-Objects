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
console.log(formularioCarro);
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
    

    carrosRegistrados.push(nuevoCarro);
    

    formularioCarro.reset();
    

    console.log(carrosRegistrados);

});

const formularioFruta = document.querySelector('#formulario-fruta');
console.log(formularioFruta);
const frutasRegistradas = [];

formularioFruta.addEventListener('submit', function(event) {
event.preventDefault();

const nuevaFruta = {

    nombre: document.querySelector('#nombreFruta').value,
    color: document.querySelector('#colorFruta').value,
    sabor: document.querySelector('#saborFruta').value,
    madurez: document.querySelector('#madurezFruta').value,
    };
    

    frutasRegistradas.push(nuevaFruta);
    

    formularioFruta.reset();
    

    console.log(frutasRegistradas);

});


const registroBtn = document.querySelector('#btn-registros')

console.log(registroBtn)

registroBtn.addEventListener('click', function(event) {
    console.table(gatosRegistrados);
    console.table(carrosRegistrados);
    console.table(frutasRegistradas);
  });