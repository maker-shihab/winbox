$( document ).ready(function() {
  $('.bars').click(function(){
    $(this).toggleClass('active');
  });


  $(".dropDown").click(
    function () {
      $(this).toggleClass('active');
      $('.megaMenu').toggleClass('active');
      return false;
    });

  $('.hero_slider_items').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})
// FOOTER MENU JAVASCRIPT
  // MAGNIFIC POPUP
  $(document).ready(function() {
    $('.videoPlayBtn').magnificPopup({
      type: 'iframe'
    });
  });
  
  
});

