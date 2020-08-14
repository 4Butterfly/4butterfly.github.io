$(function () {

	// Custom JS
	var $hamburger = $(".hamburger");
	var $menu = $(".menu");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active")
		$menu.toggleClass("is-active");
		$('body').toggleClass('lock')
	});
	$(document).click(function (e) {
		if (!$(e.target).closest('.link, .hamburger').length) {
			$hamburger.removeClass("is-active")
			$menu.removeClass("is-active");
			$('body').removeClass('lock');
		}
	})
	$('.link').on("click", function (e) {
		$hamburger.removeClass("is-active")
		$menu.removeClass("is-active");
		$('body').removeClass('lock');
	})
	const animateCSS = (element, animation, prefix = 'animate__') =>
		// We create a Promise and return it
		new Promise((resolve, reject) => {
			const animationName = `${prefix}${animation}`;
			const node = document.querySelector(element);

			node.classList.add(`${prefix}animated`, animationName);

			function handleAnimationEnd() {
				node.classList.remove(`${prefix}animated`, animationName);
				node.removeEventListener('animationend', handleAnimationEnd);

				resolve('Animation ended');
			}

			node.addEventListener('animationend', handleAnimationEnd);
		});

		new WOW().init();
});