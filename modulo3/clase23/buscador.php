<?php

$contenido = array();
$mensaje = array();

$mensaje[0]["plato"] = "Arroz chaufa";
$mensaje[0]["precio"] = "S/. 15.00";
$mensaje[1]["plato"] = "Pollo a la brasa";
$mensaje[1]["precio"] = "S/. 18.00";
$mensaje[2]["plato"] = "Lomo saltado";
$mensaje[2]["precio"] = "S/. 20.00";
$mensaje[3]["plato"] = "Cebiche";
$mensaje[3]["precio"] = "S/. 20.00";
$mensaje[4]["plato"] = "Pollada";
$mensaje[4]["precio"] = "S/. 15.00";




if(count($mensaje) > 0)
{
	$contenido["contenido"] = $mensaje;
	$contenido["accion"] = 1;
}else{
	$contenido["contenido"] = "No se encontró ningun plato";
	$contenido["accion"] = 0;
}

//echo "Se envio correctamente";
echo json_encode($contenido);
die();
?>
