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

		// $('a.colorbox').colorbox({rel:'info'});

		var userFeed = new Instafeed({
			get: 'user',
			// template: '<li><img src=”{{image}}” alt=”{{caption}}”></li>',
			userId: '3997144018',
			accessToken: '3997144018.e511589.b3cac70c8b5f40cba2822d202801e795'
		});
		// userFeed.run();

  });
})();
