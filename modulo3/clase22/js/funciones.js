

jQuery(window).on("load",function(){

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
});

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