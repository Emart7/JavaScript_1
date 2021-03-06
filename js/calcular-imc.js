var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    pesoEsValido = true;
    alturaEsValida = true;

    if ((peso < 0) || (peso > 1000)) {
        console.log("Peso incorrecto.")
        tdImc.textContent = "Peso incorrecto.";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    if ((altura < 0) || (altura > 3.0)) {
        console.log("Altura incorrecto.")
        tdImc.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    // if (pesoEsValido && alturaEsValida) {
    //     var imc = Math.round(peso / (altura * altura)) 
    //     tdImc.textContent = imc;
    // }

    if (pesoEsValido && alturaEsValida) {
        tdImc.textContent = calcularImc(peso, altura);
    }

    function calcularImc(){
        var imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

}