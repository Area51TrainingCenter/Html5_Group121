var numero = 0;
var operadores = "";
var texto = document.getElementById("texto");
var apretado = false;
//var esigual = false;

function concatenar(xixa)
{
	if(numero != 0 && apretado == true)
	{
		texto.value = "";
		apretado = false;
	}

	var aux = texto.value + xixa;
	texto.value = aux;
}

function operando(n)
{
	apretado = true;
	operadores = n;
	/*if (numero == 0) {
		operadores = n;
	}else{
		if(esigual == true)
		{
			igual();
			esigual = false;
		}
		
	}*/

	numero = parseFloat(texto.value);
	
	//texto.value = "";

}

function igual()
{
	if(operadores == "sumar")
	{
		texto.value = numero + parseFloat(texto.value);
	}

	if(operadores == "restar")
	{
		texto.value = numero - parseFloat(texto.value);
	}

	if(operadores == "multiplicar")
	{
		texto.value = numero * parseFloat(texto.value);
	}

	if(operadores == "dividir")
	{
		texto.value = numero / parseFloat(texto.value);
	}
	esigual = true;
}

function limpiar()
{
	texto.value = "";
	operadores = "";
	numero = 0;
}