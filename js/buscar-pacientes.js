var botao = document.querySelector("#buscar-paciente");

botao.onclick = function(){
	var xhr = new XMLHttpRequest();
	// configura a req
	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	// ouve quando a req for enviada
	xhr.addEventListener("load", function(){
		if(xhr.status == 200){
			document.querySelector("#erro-ajax").classList.add("invisivel");
			var pacientes = JSON.parse(xhr.responseText);
			pacientes.forEach(function(p){
				addNaTabela(p);
			});
		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			document.querySelector("#erro-ajax").classList.remove("invisivel");
		}
	});
	// envia req
	xhr.send();
};
