function xixa()
{
	alert("Shirley Arica");
}

var titulo = document.getElementById("titulo");

titulo.onclick = function()
{
	alert("Levantate que ya pasaron");
}

var titulo2 = document.getElementById("titulo2");

titulo2.addEventListener("click",function(){
	alert("Evento por escuchador");
})