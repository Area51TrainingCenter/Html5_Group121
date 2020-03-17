jQuery(document).ready(function(){

	//obtengo el teto del textarea seleccionado por ID
	//var texto = jQuery("#mensaje").text();

	//obtengo el html del parrafo seleccionado por nombre de etiqueta
	var texto = jQuery("p").html();

	//inserto o modifico el html del parrafo, con nuevo html
	//jQuery("p").html("<b>hola mundo zombie</b>");
	console.log(texto);
});