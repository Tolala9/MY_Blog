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
$(".search-box").click(function(){
	if ($(".search-field").is(":visible")) {
		$(".search-field").fadeOut(600);
		
	} else {
		$(".search-field").fadeIn(600);
	};
}); 
/* END SEARCH FIELD */

/* SEARCH FIELD for xs devices */
if ($(window) .width() < 480 ) {
	$(".search-box").click(function(){
		if ($(".toggle-mnu").is(":visible")) {
			$(".toggle-mnu").fadeOut(300);

		} else {
			$(".toggle-mnu").fadeIn(300);
		};
	}); 
}
else	{
}
/* END SEARCH FIELD  for xs devices*/

/* Active tab on menu */
$(".menu-line ul li").click(function () {
    $(".menu-line ul li").removeClass("active");
    $(".menu-line-footer ul li").removeClass("active");
    $(this).addClass("active");   
});
/* end Active tab on menu */

/* Preloader */
$(window).on('load', function() {
		$('.preloader').delay(100).fadeOut('slow');
	});
/* END Preloader */

/* Preloader */
$(window).on('load', function() {
		$('.lds-wedges, .lds-css').delay(50).fadeOut('slow');
	});
/* END Preloader */







});
