
jQuery(document).ready(function(){
	

	jQuery(".titulo-acordion").click(function(){
		//solo abrir
		//jQuery(this).next(".cuerpo-acordion").slideDown("slow");
		//jQuery(this).nextAll(".cuerpo-acordion").slideDown("slow");

		//abrir uno y el resto cierra
		/*jQuery(".cuerpo-acordion").stop().slideUp("slow");
		jQuery(".titulo-acordion").find("i").removeClass("fa-chevron-up");

		jQuery(this).next(".cuerpo-acordion").stop().slideDown("slow");
		jQuery(this).find("i").addClass("fa-chevron-up");*/


		//abrir y cerrar todos
		if( jQuery(this).find("i").hasClass("fa-chevron-up"))
		{
			jQuery(this).find("i").removeClass("fa-chevron-up")
		}else{
			jQuery(".titulo-acordion").find("i").removeClass("fa-chevron-up");
			jQuery(this).find("i").addClass("fa-chevron-up")
		}

		jQuery(".cuerpo-acordion").stop().slideUp("slow");
		jQuery(this).next(".cuerpo-acordion").stop().slideToggle("slow");


		/*var indice = jQuery(".titulo-acordion").index(this);
		jQuery(".cuerpo-acordion").eq(indice).slideDown("slow");*/
	});

});