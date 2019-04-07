$('.btn1').click(function(){
    $('.works .loaded').removeClass('loaded-2 loaded-3');
    $('.works .loaded').addClass('loaded-1');
})

$('.btn2').click(function(){
    $('.works .loaded').removeClass('loaded-1 loaded-3');
    $('.works .loaded').addClass('loaded-2');
})

$('.btn3').click(function(){
    $('.works .loaded').removeClass('loaded-1 loaded-2');
    $('.works .loaded').addClass('loaded-3');
})