(function(){

	$(function(){

    $('#main_slider').slick({
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      dots: true
    });

    $('#thumb_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      fade: false
    });

  });
})();
