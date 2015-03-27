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
    
    $(".jServiceItem").on("mouseenter", function(){
        var that = this;
        $(this).next().find("a").css({
            "color": "yellow",
            "cursor": "pointer"
        });
        var height = $(that).find("img").height();
        $(this).find(".jEffect").css({
            "display": "block",
            "height": height + 2,
        });
        $(this).find(".jEffect >span").css("line-height", height + "px");
    });
    
    $(".jServiceItem").on("mouseleave", function(){
        $(this).next().find("a").css({
            "color": "white",
            "cursor": "pointer"
        });
        $(this).find(".jEffect").css("display", "none");
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

    $(".service-link").on("mouseenter", function(e){
        $(this).find("a").css("color", "yellow");
    });

    $(".service-link").on("mouseleave", function(e){
        $(this).find("a").css("color", "white");
    });

};