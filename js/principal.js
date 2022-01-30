// capturando datos #1

// var titulo = document.querySelector(".titulo");
// console.log(titulo.textContent);
// console.log(titulo);
// titulo.textContent = "Buena Vida Nutricion"
// console.log("Archivo independiente JS");


// captrurando datos #2
var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


pesoEsValido = true;
alturaEsValida = true;

if ((peso < 0) || (peso > 1000)) {
    console.log("Peso incorrecto.")
    tdImc.textContent = "Peso incorrecto.";
    pesoEsValido = false;
}
if ((altura < 0) || (altura > 3.0)) {
    console.log("Altura incorrecto.")
    tdImc.textContent = "Altura incorrecta.";
    alturaEsValida = false;
}

if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc;
}

// console.log(imc);
// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(tdAltura);
// console.log(altura);