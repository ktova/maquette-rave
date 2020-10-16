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
// init
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            center: true,
            items:3,
            loop:true,
            margin:10,
            autoWidth: true
            /*responsive:{
                600:{
                    items:4
                }
            }*/
        }
    );
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