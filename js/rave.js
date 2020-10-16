// Rave Scripts

// Pre-loader animation
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).on('load',function(){
    $('.pre-loader').fadeOut(1000);
    $('body').css('overflow','scroll');
})


// Reactive functions
$('.gallery-item').hover(
    function(){
        var child = $(this).children();
        child.fadeIn();
        //child.toggleClass('gallery-hidden');
    }  ,
    function(){
        var child = $(this).children();
        child.fadeOut();
        //child.toggleClass('gallery-hidden');
    }
)