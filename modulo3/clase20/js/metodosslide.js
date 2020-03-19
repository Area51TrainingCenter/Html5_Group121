jQuery(document).ready(function(){

	jQuery("#esconder").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").slideUp(1000,function(){
			alert("se escondio el cuadrado");
		});
	});

	jQuery("#mostrar").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").slideDown(1000,function(){
			alert("se mostro el cuadrado");
		});
	});


	jQuery("#esconderymostrar").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").slideToggle(1000,function(){
			alert("mostrando y desvaneciendo el cuadrado");
		});
	});

});