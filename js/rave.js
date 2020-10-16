// Rave Scripts

// Pre-loader animation
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).on('load',function(){
    $('.pre-loader').fadeOut(1000);
    $('body').css('overflow','scroll');
})

// Owl Carousel functions
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

// Reactive functions
$('.gallery-item').hover(
    function(){
        var child = $(this).children();
        child.fadeIn(200);
    }  ,
    function(){
        var child = $(this).children();
        child.fadeOut(200);
    }
)