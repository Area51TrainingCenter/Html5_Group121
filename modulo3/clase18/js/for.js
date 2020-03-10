var dias_semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

for (var i = 0; i < dias_semana.length; i++) {
	console.log(dias_semana[i]);
}

for (var i = dias_semana.length - 1; i >= 0 ; i--) {
	if(i % 2 != 0)
	{
		console.log(dias_semana[i]);
		//break;
	}
}