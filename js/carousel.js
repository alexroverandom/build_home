var Carousel = function () {
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
    
    $(".jServiceItem").on("mouseenter", "a", function(){
        $(this).parent().find("a").css({
            "color": "yellow",
            "cursor": "pointer"
        });
    });
    
    $(".jServiceItem").on("mouseout", "a", function(){
        $(this).parent().find("a").css({
            "color": "white",
            "cursor": "auto"
        });
    });
    
    $(".jDescription").hide();
    $(".jPanel.active").find(".jDescription").show();
    $(".jToggle").on("click", function(){
        if (!$(this).parent().parent().hasClass("active")) {
            $(".jPanel").removeClass("active");
            $(".jToggle").html("+");
            $(this).parent().parent().addClass("active")
            $(this).html("-");
            var descBlocks = $(".jDescription");
            descBlocks.slideUp();
            $(this).parent().next().slideDown();
        } else {
            $(this).parent().parent().removeClass("active");
            $(this).html("+");
            $(this).parent().next().slideUp();
        }
    });
};