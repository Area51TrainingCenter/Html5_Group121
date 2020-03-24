jQuery(document).ready(function(){

	jQuery(".tab").click(function(e){
		e.preventDefault();
		var indice = jQuery(this).index();

		jQuery(".tab").removeClass("abierto");
		jQuery(this).addClass("abierto");
		jQuery(".cuerpo-tab").removeClass("abierto");
		jQuery(".cuerpo-tab").eq(indice).addClass("abierto");
	});

});