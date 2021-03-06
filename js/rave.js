// Rave Scripts

// Pre-loader animation
$(document).ready(function()
{
    $(this).scrollTop(0);
});

$(window).on('load',function()
{
    $('.pre-loader').fadeOut(1000);
    $('body').css('overflow','scroll');
})

// Owl Carousel functions
// init
$(document).ready(function()
{
    $(".owl-carousel").owlCarousel(
        {
            center: true,
            items:3,
            loop:true,
            autoWidth:true,
            margin:20
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

// Get offers
function getOffers(offer)
{
    var tab = $('#tab'+offer+'');
    var div = $('#'+offer+'');
    div.removeClass('tab-hidden');
    div.siblings().addClass('tab-hidden');
    tab.css('border-bottom','4px solid #ff6969');
    tab.addClass('tabactive');
    tab.siblings().css('border-bottom','none');
    tab.siblings().removeClass('tabactive');
}