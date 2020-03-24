jQuery(document).ready(function(){

	jQuery(".hamb").click(function(){
		jQuery(".hamb i").toggleClass("fa-times");
		jQuery("header .container .menu").toggleClass("open");
	})

});