var contador = 0;

jQuery(document).ready(function(){

	jQuery("#encima").click(function(e){
		e.preventDefault();

		contador++;
		jQuery("section").prepend("<div class='cuadrado'>"+contador+"</div>");
	});


	jQuery("#debajo").click(function(e){
		e.preventDefault();

		contador++;
		jQuery("section").append("<div class='cuadrado'>"+contador+"</div>");
	});

	jQuery("#desactivar").click(function(e){
		e.preventDefault();

		jQuery(document).off("click",".cuadrado");
	});

	jQuery("#activar").click(function(e){
		e.preventDefault();

		jQuery(document).on("click",".cuadrado",function(){
			var texto = jQuery(this).text();
			alert(texto);
		});
	});


});


jQuery(document).on("click",".cuadrado",function(){
	var texto = jQuery(this).text();
	alert(texto);
});