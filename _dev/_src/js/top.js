(function(){

	$(function(){

    $('#main_slider').slick({
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      dots: true,
			prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button"><img class="js-rollover" src="/assets/images/top/arrow_main_prev.png"></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><img class="js-rollover" src="/assets/images/top/arrow_main_next.png"></button>',
			autoplay: true,
			autoplaySpeed: 5000
    });

    $('#thumb_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
			rtl: true,
			prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button"><img class="js-rollover" src="/assets/images/top/arrow_thumb_next.png"></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><img class="js-rollover" src="/assets/images/top/arrow_thumb_prev.png"></button>',
			autoplay: true,
			autoplaySpeed: 3000
    });

		$('#info_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      fade: false,
			prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button"><img class="js-rollover" src="/assets/images/top/top_slider_prev.png"></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><img class="js-rollover" src="/assets/images/top/top_slider_next.png"></button>'
    });

		$('#instafeed a').on('click', function(e){
      e.preventDefault();
      // $(this).colorbox({rel:'instagram'});
    });

		var userFeed = new Instafeed({
			get: 'user',
		  template: '<li class="slide"><a href="{{link}}"><img src="{{image}}" alt="{{caption}}"></a></li>',
			userId: '4320724214',
			accessToken: '4320724214.35bc06c.c65eb74f94e741d0a5cbcc01b62592a9',

      success: function(){
        setTimeout(function(){
          $('#instafeed').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            fade: false,
            slide: '.slide',
      			prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Prev" role="button"><img class="js-rollover" src="/assets/images/top/top_slider_prev.png"></button>',
      			nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><img class="js-rollover" src="/assets/images/top/top_slider_next.png"></button>'
          });
        }, 1000);
      }
		});
		userFeed.run();

  });
})();
