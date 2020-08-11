(function () {
	var $slider = $('.home-slides');
	var current = 1;
	var slides = 3;
	setInterval(function () {
		current = current + 1;
		if (current > slides) {
			current = 1;
		}
		$slider.attr('slide', current);
	}, 7500);
})();
window.scrollDown = function () {
	$("html, body").animate({
		scrollTop: $('.home-arrow').offset().top + 'px'
	}, 300, 'linear');
};
(function () {
	var $testimonials = $('.home-testimonials');
	var slides = 5;
	var current = 1;
	var lastSwitch = Date.now();
	var SECONDS_PER_SLIDE = 8500;
	window.viewSlide = function (slide) {
		lastSwitch = Date.now();
		current = slide;
		$testimonials.attr('slide', current);
	};
	setInterval(function () {
		var now = Date.now();
		if ((now - lastSwitch) >= SECONDS_PER_SLIDE) {
			current = current + 1;
			if (current > slides) {
				current = 1;
			}
			window.viewSlide(current);
		}
	}, 500);

	function nextSlide() {
		current = current - 1;
		if (current < 1) {
			current = slides;
		}
		window.viewSlide(current);
	}

	function prevSlide() {
		current = current + 1;
		if (current > slides) {
			current = 1;
		}
		window.viewSlide(current);
	}
	$testimonials[0].addEventListener('touchstart', function (evt) {
		xDown = evt.touches[0].clientX;
		yDown = evt.touches[0].clientY;
	}, false);
	var xDown = null;
	var yDown = null;
	$testimonials[0].addEventListener('touchmove', function (evt) {
		if (!xDown || !yDown) {
			return;
		}
		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		if (Math.abs(xDiff) > Math.abs(yDiff)) {
			if (xDiff > 0) {
				prevSlide();
			} else {
				nextSlide();
			}
		}
		xDown = null;
		yDown = null;
	}, false);


	/**Popup**/

	window.showPopup = function (popup, event) {
		if (event) {
			event.preventDefault();
		}
		$('html').removeClass('show-login show-sign-up show-forgot-password show-reset-password');
		if (popup.indexOf('login') !== -1) {
			$('html').addClass('show-login');
			/*setTimeout(function () {
					$('.login-popup').find('[name="email"]').focus();
			}, 100);*/

		} else if (popup.indexOf('sign-up') !== -1) {
			$('html').addClass('show-sign-up');
			/*setTimeout(function () {
					$('.sign-up-popup').find('[name="email"]').focus();
			}, 100);*/
		}
		return false;
	};

	window.closePopup = function () {
		$('html').removeClass('show-login show-sign-up show-forgot-password show-reset-password');
		$('.popup-backdrop').find('.popup-alert').hide();
	};

	window.submitForm = function (popup) {
		event.preventDefault();
		if (popup == "login") {
			var emailvalid = /^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/g.test($(".login-popup input[type='email']").val());
			var passvalid = $(".login-popup input[type='password']").val().length >= 6;
			if (emailvalid && passvalid) {
				$('.login-popup .popup-error').hide(300);
				$('.login-popup .loading').show();
				setTimeout(function () {
					window.location.replace("404.html");
				}, 300);
			} else {
				$('.login-popup .popup-error').show(300);
			}

		} else if (popup == "sign-up") {
			var emailvalid = /^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/g.test($(".sign-up-popup input[type='email']").val());
			var checkvalid = $(".sign-up-popup input[type='checkbox']").val();
			if (emailvalid && checkvalid == "on") {
				$('.sign-up-popup .popup-error').hide(300);
				$('.sign-up-popup .loading').show();
				setTimeout(function () {
					window.location.replace("404.html");
				}, 300);
			} else {
				$('.sign-up-popup .popup-error').show(300);
			}
		} else {
			$('.popup-error').hide(300);
			$('.sign-up-popup .loading').show();
			setTimeout(function () {
				window.location.replace("404.html");
			}, 300);
		}
	};


})();
