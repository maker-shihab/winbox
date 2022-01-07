$( document ).ready(function() {
  $('.bars').click(function(){
    $(this).toggleClass('active');
  });




  $('.hero_slider_items').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});