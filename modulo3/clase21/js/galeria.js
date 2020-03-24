jQuery(document).ready(function(){
	
	jQuery(".bloque-thumb img").click(function(){
		jQuery(".bloque-thumb img").removeClass("seleccion");
		jQuery(this).addClass("seleccion");

		var url = jQuery(this).attr("src");
		
		jQuery(".bloque-img img").attr("src",url);
	});

});