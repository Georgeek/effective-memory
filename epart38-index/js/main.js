$(document).ready(function(){
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		adaptiveHeight: true,
		autoplay: false,
		speed: 1000,
		mobileFirst: true
	});

	$('[selectBox]').selectBoxIt();
});

