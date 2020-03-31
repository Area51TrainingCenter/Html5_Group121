
var ancho = jQuery(window).width();
var alto = jQuery(window).height();

var izquierda = ancho - 100;
var arriba = alto - 100;

jQuery(document).ready(function(){

	jQuery(".cuadrado").click(function(e){
		e.preventDefault();
		empezar();
	});

});

jQuery(window).resize(function(){
	ancho = jQuery(window).width();
	alto = jQuery(window).height()
});

function empezar()
{
	jQuery(".cuadrado").stop().animate(
		{"background-color":"#0000ff",
		"top":0,"left":izquierda}
		,2000,function(){

			jQuery(".cuadrado").stop().animate(
				{"background-color":"#00ff00",
				"top":arriba,"left":izquierda}
				,2000, function(){

					jQuery(".cuadrado").stop().animate(
						{"background-color":"#ffff00",
						"top":arriba,"left":0}
						,2000, function(){

							jQuery(".cuadrado").stop().animate(
								{"background-color":"#ff0000",
								"top":0,"left":0}
								,2000, function(){
									empezar();
							});
					});
			});
	});
}