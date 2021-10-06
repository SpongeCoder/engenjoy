//= vendor/jquery.js

$(function() {
	var $headeMenu = $('.menu'),
			$headerMenuLink = $('.sandwich-btn');
	
	$(window).resize(function () {
		var w = $( window ).width();

		if (w <= 800) $headeMenu.addClass('hidden');
		else $headeMenu.removeClass('hidden');
	});

	$headerMenuLink.on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');

		$headeMenu.removeClass('hidden');
		$headeMenu.toggleClass('active');

		$('.header').toggleClass('active');
	});

});