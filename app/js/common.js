$(function() {

/*TOGGLE MENU*/

	$(".toggle-mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".toggle-mnu").click(function(){
	if ($(".top-mnu").is(":visible")) {
		$(".top-mnu").fadeOut(600);
		$(".top-mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top-mnu").fadeIn(600);
		$(".top-mnu li a").addClass("fadeInUp animated");
	};
}); 

$(".top-mnu li a").click(function() {
	$(".top-mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
}).append("<span>");
/* END TOGGLE MENU */

/*SCROLL BUTTON*/
$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
/* END SCROLL BUTTON*/

/* SEARCH FIELD */
	$(".toggle-mnu, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".search-box").click(function(){
	if ($(".search-field").is(":visible")) {
		$(".search-field").fadeOut(600);
		
	} else {
		$(".search-field").fadeIn(600);
	};
}); 


/* END SEARCH FIELD */

});
