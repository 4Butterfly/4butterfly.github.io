document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
	$('.fotorama').fotorama({
		// margin: '2',
		width: 600,
    maxwidth: '100%',
    ratio: 16/9,
		loop: true,
		arrows: false,
		autoplay: 3000,
	});
});