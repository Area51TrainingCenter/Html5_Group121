jQuery(document).ready(function(){

	jQuery("#desvanecer").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").fadeOut(1000,function(){
			alert("se escondio el cuadrado");
		});
	});

	jQuery("#aparecer").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").fadeIn(1000,function(){
			alert("se mostro el cuadrado");
		});
	});


	jQuery("#aperecerydesvanecer").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").fadeToggle(1000,function(){
			alert("mostrando y desvaneciendo el cuadrado");
		});
	});

});