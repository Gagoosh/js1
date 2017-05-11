var input = document.querySelector("#filtrar-tabela");

input.addEventListener("input", function(){
	var pacientes = document.querySelectorAll(".paciente");
	var _ = this;
	if(_.value.length > 0){
		pacientes.forEach(function(paciente){
			var nome = paciente.querySelector(".info-nome").textContent;
			var exp = new RegExp(_.value, "i");
			if(!exp.test(nome)){
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}
		});
	} else {
		pacientes.forEach(function(p){
			p.classList.remove("invisivel");
		});
	}
});
