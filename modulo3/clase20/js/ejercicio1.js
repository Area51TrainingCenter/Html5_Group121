jQuery(document).ready(function(){

	jQuery("#mostrar").click(function(e){
		e.preventDefault();

		jQuery(".trama").addClass("abrir");
		jQuery(".contenedor").addClass("abrir");
	});

	jQuery(".cerrar").click(function(e){
		e.preventDefault();

		jQuery(".trama").removeClass("abrir");
		jQuery(".contenedor").removeClass("abrir");
	});

});