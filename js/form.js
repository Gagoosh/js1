var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.onclick = function(e){
	event.preventDefault(e);

	var form = document.querySelector("#form-adiciona");
	var paciente = getPacienteForm(form);
	var erros = validaPaciente(paciente);
	if(erros.length > 0){
		exibeErro(erros);
		return;
	}

 	addNaTabela(paciente);

	form.reset();
	document.querySelector("#mensagem-erro").innerHTML = "";
};

// Adiciona pacientes na tabela
function addNaTabela(paciente){
	var pacienteTr = buildTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

// Pega valores do formulário e retorna-os em um objeto "paciente"
function getPacienteForm(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

// Cria tr do paciente novo
function buildTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(buildTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(buildTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(buildTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(buildTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(buildTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

// Cria os td's
function buildTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}


function validaPaciente(paciente){
	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco.");
	}

	if(!validaPeso(paciente.peso) || paciente.peso == 0){
		erros.push("Peso é inválido.");
	}

	if(!validaAltura(paciente.altura)  || paciente.altura == 0){
		erros.push("Altura é inválido.");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco.");
	}

	return erros;
}

// Exibe os erros retornados pela funcão validaPaciente(paciente);
function exibeErro(e){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
		e.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});
}
