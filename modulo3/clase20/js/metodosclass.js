jQuery(document).ready(function(){


	jQuery("#agregarclase").click(function(e){

		e.preventDefault();

		jQuery(".cuadrado").addClass("verde");

	});

	jQuery("#removerclase").click(function(e){

		e.preventDefault();

		jQuery(".cuadrado").removeClass("verde");

	});

	jQuery("#verificarclase").click(function(e){

		e.preventDefault();

		if(jQuery(".cuadrado").hasClass("verde"))
		{
			//alert("tiene la clase verde");
			jQuery(".cuadrado").removeClass("verde");
		}else{
			//alert("no tiene la clase verde")
			jQuery(".cuadrado").addClass("verde");
		}

	});

	jQuery("#agregarremoverclase").click(function(e){

		e.preventDefault();

		jQuery(".cuadrado").toggleClass("verde");

	});

});