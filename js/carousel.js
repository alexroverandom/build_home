var Carousel = function () {

var isHelpSearchShowed = false;
var isMenuShowed = false;
    changeElementHeight = function(el){
        var width = $(window).width();
        if (width < 1160) {
            var height = 500 - parseInt(100 * (1160 / width));
            $(el).css("height", height + 'px');
        }
    };

    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'img',
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

$(window).on("resize", function(){
    if ($(window).width() > 639){
        changeElementHeight($(".jServices")[0]);
        $(".jHelpSearch").hide();
        isHelpSearchShowed = false;
    } else{
        if ($(window).width() > 619){
            $(".jHelpSearch").hide();
            isHelpSearchShowed = false;
        }
        if ($(window).width() > 463){
            $(".jMenu").show();
            isMenuShowed = false;
        } else {
            isMenuShowed = false;
            $(".jMenu").hide();
            $(".slider").css("margin-top", "60px");
            }
        }
        $(".jServices").css("height", '400px');
    });
if ($(window).width() > 639){
    changeElementHeight($(".jServices")[0]);
}

$(".jSocials img").on("mouseenter", function(e){
    var src = $(e.currentTarget).attr('src').split('.png')[0];
    var newSrc = src + "-edit.png";
    $(e.currentTarget).attr('src', newSrc);
});

$(".jSocials img").on("mouseleave", function(e){
    var src = $(e.currentTarget).attr('src').split('-edit.png')[0];
    var newSrc = src + ".png";
    $(e.currentTarget).attr('src', newSrc);
});

$(".jSearchBtn").on("click", function(e){
    if($(window).width() < 960 && $(window).width() > 479){
        if (!isHelpSearchShowed){
            $(".jHelpSearch").slideDown();
            isHelpSearchShowed = true;
        } else{
            $(".jHelpSearch").slideUp();
            isHelpSearchShowed = false;
        }
        
    }
});

$(".jMenuBtn").on("click", function(e){
    if ($(window).width() < 480){
        if (!isMenuShowed){
            $(".slider").css("margin-top", "280px");
            $(".jMenu").slideDown();
            isMenuShowed = true;
        } else{
            $(".slider").css("margin-top", "60px");
            $(".jMenu").slideUp();
            isMenuShowed = false;
        }
    }
});

$(".jMenuBtn img").on('mouseenter', function(e){
    $(e.currentTarget).attr('src', 'imgs/mobile_menu_hovered.png');
});

$(".jMenuBtn img").on('mouseleave', function(e){
    $(e.currentTarget).attr('src', 'imgs/mobile_menu.png');
});







    
};