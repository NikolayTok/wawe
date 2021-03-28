$(function(){
    
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
      });
$('.menu__btn').on('click', function() {
$('.menu').toggleClass('menu--active')
});
      var mixer = mixitup('.gallery__content');
    
});

