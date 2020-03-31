

jQuery(window).on("load",function(){
	jQuery(".trama").fadeOut("slow",function(){
		jQuery("body").removeClass("sinscroll");
	});	

	setTimeout(function(){
		var id =  window.location.hash;

		if(jQuery(id).length > 0)
		{
			jQuery("html,body").animate({
				"scrollTop": jQuery(id).offset().top,
			},800)
		}
	},1000)
})

/*
setInterval(function(){
	console.log(new Date());
},1000)*/


jQuery(document).ready(function(){

	jQuery(".playpause").click(function(e){
		e.preventDefault();

		var videochica = jQuery("#videochica")[0];
		var icono = jQuery(this).find("i");
		if(videochica.paused)
		{
			icono.addClass("fa-pause-circle").removeClass("fa-play-circle");
			videochica.play()
		}else{
			icono.addClass("fa-play-circle").removeClass("fa-pause-circle");
			videochica.pause();
		}
	})	

	jQuery(".hamb").click(function(){
		jQuery(".hamb i").toggleClass("fa-times");
		jQuery("header .container .menu").toggleClass("open");
	})

	jQuery("header .menu a[href^='#']").click(function(e){
		
		var id = jQuery(this).attr("href");
		if(jQuery(id).length > 0)
		{
			jQuery("html,body").animate({
				"scrollTop": jQuery(id).offset().top,
			},800)
		}
	})

	jQuery(".subida").click(function(e){
		e.preventDefault();
		jQuery("html,body").animate({
			"scrollTop": 0,
		},800)

	})

	jQuery(".flecha-abajo").click(function(e){
		e.preventDefault();
		var siguienteseccion = jQuery(this).closest("section").next("section");

		jQuery("html,body").animate({
			"scrollTop": siguienteseccion.offset().top,
		},800)
	})

	jQuery(".btnenviar").click(function(){
		jQuery.ajax({
			url : "registrar.php",
			dataType:"json",
			method:"post",
			/*data:{
				Nombre:jQuery("#nombre").val(),
				Email:jQuery("#email").val(),
				local:jQuery("#local").val(),
				mensaje:jQuery("#mensaje").val(),
			}*/
			data: jQuery("#frmcontacto").serialize(),   
		}).done(function(e){
			if(e.accion  == 1)
			{
				jQuery("#respuesta").css({"color":"green"}).html(e.texto);
				jQuery("#nombre").val("");
				jQuery("#email").val("");
				jQuery("#local").val("");
				jQuery("#mensaje").val("");
			}else{
				jQuery("#respuesta").css({"color":"red"}).html(e.texto);
			}
			
			//abrirmensaje(e)
		});
	});

	jQuery(".btnbuscar").click(function(){
		jQuery.ajax({
			url : "buscador.php",
			dataType:"json",
			method:"post",
			/*data:{
				Nombre:jQuery("#nombre").val(),
				Email:jQuery("#email").val(),
				local:jQuery("#local").val(),
				mensaje:jQuery("#mensaje").val(),
			}*/
			data: jQuery("#frmbsucadorplatos").serialize(),   
		}).done(function(e){
			if(e.accion  == 1)
			{
				var html ="<table>";
				html+="<tr><th>Plato</th><th>Precio</th>";

				jQuery.each(e.contenido,function(indice,elemento){
					html+="<tr><td>"+elemento.plato+"</td><td>"+elemento.precio+"</td>";
				})

				html+="</table>";

				jQuery("#respuestaplatos").attr("style","").html(html);
				jQuery("#plato").val("");

			}else{
				jQuery("#respuestaplatos").css({"color":"red"}).html(e.contenido);
			}
			
			//abrirmensaje(e)
		});
	});
});

function abrirmensaje(mensaje)
{
	jQuery(".bloquemensaje").html(mensaje);
	jQuery(".trama2").fadeIn("fast",function(){
		jQuery(".bloquemensaje").fadeIn("fast",function(){
			setTimeout(function(){
				jQuery(".bloquemensaje").fadeOut("fast");
				jQuery(".trama2").fadeOut("fast");
			},3000)
		});
	});
}

jQuery(window).scroll(function(){

	if(jQuery(window).scrollTop() >= 100)
	{
		jQuery("header").addClass("blanco");
	}else{
		jQuery("header").removeClass("blanco");
	}


	if(jQuery(window).scrollTop() >= 600)
	{
		jQuery(".subida").fadeIn(400);
	}else{
		jQuery(".subida").fadeOut(400);
	}

});