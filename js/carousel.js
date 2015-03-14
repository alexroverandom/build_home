var Carousel = function () {
	var $carousel = $('.jPageTitle').removeClass('page_title').addClass('carousel');
	$carousel.removeAttr('style');
	var slidePhotosArray = [];
	var $x = $('.jSlideImg');
	for (var i = 0; i < $x.length; i++) {
		slidePhotosArray.push($x[i]);
	}
	$carousel.children().remove();
	for (var j = 0; j < slidePhotosArray.length; j++) {
		$(slidePhotosArray[j]).appendTo($carousel);
	}
	$('body').css('overflow-x', 'hidden');

	$('.carousel').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		slide: 'div',
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000
	});
}