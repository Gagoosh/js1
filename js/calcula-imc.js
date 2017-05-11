var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	var peso = pacientes[i].querySelector(".info-peso").textContent;
	var altura = pacientes[i].querySelector(".info-altura").textContent;
	var tdImc = pacientes[i].querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!pesoValido) {
		pesoValido = false;
		tdImc.textContent = "Peso Inválido.";
		pacientes[i].classList.add("paciente-invalido");
	}

	if (!alturaValida) {
		alturaValida = false;
		tdImc.textContent = "Peso Inválido.";
		pacientes[i].classList.add("paciente-invalido");
	}

	if(pesoValido == true && alturaValida == true){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
		if(altura >= 0 && altura < 3.0){
			return true;
		} else {
			return false;
		}
}

function calculaImc(peso, altura){
	var imc = 0;
	var imc = peso / (altura * altura);
	return imc.toFixed(2);
}
