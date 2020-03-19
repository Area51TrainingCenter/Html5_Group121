jQuery(document).ready(function(){

	jQuery("#mostrar").click(function(e){
		e.preventDefault();

		jQuery(".trama").fadeIn(1000);
		jQuery(".contenedor").fadeIn(1000);
	});

	jQuery(".cerrar").click(function(e){
		e.preventDefault();

		jQuery(".trama").fadeOut(1000);
		jQuery(".contenedor").fadeOut(1000);
	});

});