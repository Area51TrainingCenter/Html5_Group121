
var ancho = jQuery(window).width();
var alto_sinpadding = jQuery("nav").height();
var alto_conpadding = jQuery("nav").innerHeight();
var alto_conpaddingborde = jQuery("nav").outerHeight();
var alto_conpaddingbordemargin = jQuery("nav").outerHeight(true);

console.log(ancho);
console.log(alto_sinpadding);
console.log(alto_conpadding);
console.log(alto_conpaddingborde);
console.log(alto_conpaddingbordemargin);

jQuery(document).ready(function(){

	jQuery("#margin").click(function(e){
		e.preventDefault();

		jQuery(".cuadrado").stop().animate({"background-color":"#00ff00","margin-left":"+=100px","margin-top":"+=50px"},800,function(){
			jQuery(".cuadrado").stop().animate({"background-color":"#ff0000","margin-left":"-=100px","margin-top":"-=50px"},800, function(){
		
			});
		});
	});

});