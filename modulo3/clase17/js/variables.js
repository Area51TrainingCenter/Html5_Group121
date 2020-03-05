var numero1;
numero1 = 2000;

var numero2 = 309;
var numero3 = 1.5;

var numero4 = "309";

var nombre = 'alonso "xixa" perez';
var casado = true;
var fecnac = "1985-03-27";
var xixa = "1234";
console.log(xixa);
xixa = parseInt(xixa);
console.log(xixa);

var xixa2 = "12.34";
console.log(xixa2);
xixa2 = parseFloat(xixa2);
console.log(xixa2);

var numeroconvertido = "este numero es "+309;
var nombre_completo = "alonso"+" "+"perez";
var nombre_fecha = nombre+" "+fecnac;

var lista = [numero1,numero2,"hola mundo"];
console.log(lista[0]);

var lista2 = [lista];
console.log(lista2[0][2]);

var persona = {nombre:"alonso",apellido:"perez",fecnac:"1985-03-27"};
var persona2 = {nombre:"kristina",apellido:"lupu",fecnac:"1984-03-27"};
var persona3 = {nombre:"carolina",apellido:"arce",fecnac:"1983-03-27"};

console.log(persona);

var familia = [persona,persona2,persona3];
console.log(familia);

var dias_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
console.log(dias_semana[1]);

//operadores ariemeticos
var total = numero1 + numero2;
console.log(total);
total = numero1 - numero2;
console.log(total);
total = numero1 * numero2;
console.log(total);
total = numero1 / numero2;
console.log(total);
total = numero1 % numero2;
console.log(total);
total = numero1 + numero2 / numero1;
console.log(total);

/*
Operadores logicos

console.log(numero1 > numero2);
console.log(numero1 >= numero2);
console.log(numero1 < numero2);
console.log(numero1 <= numero2);
console.log(numero1 == numero2);
console.log(numero1 != numero2);
console.log(numero2 === numero4);
*/