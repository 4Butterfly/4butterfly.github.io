document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
	var $hamburger = $(".hamburger");
	var $menu = $(".nav");
	var $href = $(".nav-item");
	var $body = $('body')
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active")
		$menu.toggleClass("is-active");
		$body.toggleClass('lock')
	});
	$(document).click(function (e) {
		if (!$(e.target).closest('.header-menu, .hamburger').length) {
			$hamburger.removeClass("is-active")
			$menu.removeClass("is-active");
			$body.removeClass('lock');
		}
	})
	$href.on("click", function (e) {
		$hamburger.removeClass("is-active")
		$menu.removeClass("is-active");
		$body.removeClass('lock');
	})

	var scrolled;
	window.onscroll = function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 100) {
			$(".header").css({
				"background": "#fff"
			})
		}
		if (100 > scrolled) {
			$(".header").css({
				"background": "transparent"
			})
		}

	}

});