jQuery(document).ready(function(){
	jQuery("#muestra").click(function(e){
		e.preventDefault();
		jQuery(".cuadrado").show();
	});

	jQuery("#esconde").click(function(e){
		e.preventDefault();
		jQuery(".cuadrado").hide();
	});
});