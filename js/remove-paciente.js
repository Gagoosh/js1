var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function(e){
	e.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		e.target.parentNode.remove();
	}, 400);
});
