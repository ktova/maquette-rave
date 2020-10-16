// Rave Scripts

// Pre-loader animation
$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).on('load',function(){
    $('.pre-loader').fadeOut(1000);
    $('body').css('overflow','scroll');
})


console.log($('.gallery-item'));
// Reactive functions
$('.gallery').hover(
    function(){
        console.log('test');
    }  ,
    function(){
        console.log('bye');
    }
    )