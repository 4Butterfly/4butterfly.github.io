document.addEventListener("DOMContentLoaded", function () {

	$('.fotorama').fotorama({

		maxwidth: '100%',
		ratio: 16 / 9,
		loop: true,
		arrows: false,
		autoplay: 3000,
	});
	$(".owl-carousel").owlCarousel({
		items: 2,
		loop: true,
		margin: 40,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 2500,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			769: {
				items: 2
			}
		}
	});
	var $hamburger = $(".hamburger");
	var $menu = $(".header-menu");
	var $href = $(".header-menu-item");

	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active")
		$menu.toggleClass("is-active");
		$('body').toggleClass('lock')
	});
	$(document).click(function (e) {
		if (!$(e.target).closest('.header-menu, .hamburger').length) {
			$hamburger.removeClass("is-active")
			$menu.removeClass("is-active");
			$('body').removeClass('lock');
		}
	})
	$href.on("click", function (e) {
		$hamburger.removeClass("is-active")
		$menu.removeClass("is-active");
		$('body').removeClass('lock');
	})


});