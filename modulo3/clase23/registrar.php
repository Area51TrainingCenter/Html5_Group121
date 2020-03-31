<?php

$formulario = $_POST;


//print_r($formulario);


$nombre = $_POST["Nombre"];
$email = $_POST["Email"];
$local = $_POST["local"];
$msj = $_POST["mensaje"];

$mensaje = array();

if(isset($nombre) and !empty($nombre))
{
	if(isset($email) and !empty($email))
	{
		if(isset($local) and !empty($local))
		{
			if(isset($msj) and !empty($msj))
			{
				$mensaje["accion"] = 1;
				$mensaje["texto"] = "Se registro satisfactoriamente";
				
			}else{
				$mensaje["accion"] = 0;
				$mensaje["texto"] = "Ingrese mensaje";
			}
		
		}else{
			$mensaje["accion"] = 0;
			$mensaje["texto"] = "Seleccione un local";
		}
	}else{
		$mensaje["accion"] = 0;
		$mensaje["texto"] = "Ingrese email";
	}
}else{
	$mensaje["accion"] = 0;
	$mensaje["texto"] = "Ingrese nombre";
}


//echo "Se envio correctamente";
echo json_encode($mensaje);
die();
?>
