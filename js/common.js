$(function () {

	// Custom JS
	particlesJS.load('particles-js', '../libs/particlesjs/particles.json', function () {
		console.log('callback - particles.js config loaded');
	});

	$(".owl-carousel").owlCarousel({
		loop: 'true',
		autoplay: 'true',
		autoplaySpeed:'2000',
		autoplayTimeout:'2000',
		autoplayHoverPause: 'true',
		center: 'true',
		responsive:{
			0:{
					items:1
			},
			425:{
					items:2
			},
		765:{
					items:3
			},
			1023:{
				items:4
		}
	}
	});
});