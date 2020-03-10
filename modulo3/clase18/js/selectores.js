var h1 = document.getElementById("titulo");
/*h1.innerHTML = "HOLA AREA51";
h1.className = "xixa";
h1.id = "otroid";*/

var lista_de_h2 = document.getElementsByTagName("h2");
for (var i = 0; i < lista_de_h2.length; i++) {
	lista_de_h2[i].innerHTML = "<span>Soy h2 "+i+"</span>";
}

var lista_de_h3 = document.getElementsByClassName("subtitulo");
for (var i = 0; i < lista_de_h3.length; i++) {
	lista_de_h3[i].innerHTML = "<span>Soy h3 "+i+"</span>";
}

//var lista_de_h4 = document.querySelectorAll("input[type=text]");
var lista_de_h4 = document.querySelectorAll(".subtitulito");
for (var i = 0; i < lista_de_h4.length; i++) {
	lista_de_h4[i].innerHTML = "<span>Soy h4 "+i+"</span>";
}

var xixa = document.querySelector("input[type=text]");

xixa.value = "Alonso";
