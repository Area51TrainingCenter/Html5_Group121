var n1 = 10;
var n2 = 15;
/*function sumar()
{
	return n1 + n2;
}*/

function sumar(a = 0,b = 0)
{
	return a + b;
}

function sumar2(a = 0,b = 0)
{
	n1 = a;
	n2 = b;
}

console.log(n1);
console.log(n2);

sumar2(20,30);

console.log(n1);
console.log(n2);

console.log(sumar(50));

function restar()
{
	var numero1 = 10;
	var numero2 = 40;
	return numero1 - numero2;
}


console.log(restar());

/*
estas lienas botan error, porque esas 
variables son del metodo restar y no son publicas
*/
console.log(numero1);
console.log(numero2);