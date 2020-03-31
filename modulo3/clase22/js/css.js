jQuery(document).ready(function(){

	jQuery("#margin").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").css({"margin-left":"100px","margin-top":"50px"});
	});


	jQuery("#colorfondo").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").css({"background-color":"#000"});
	});

});