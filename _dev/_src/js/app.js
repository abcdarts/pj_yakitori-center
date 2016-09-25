(function(){

	$(function(){

		// ロールオーバー
		var RollOver = function(){
			$('img.js-rollover, input.js-rollover').each(function(){
				this.originalSrc = $(this).attr('src');
				this.rolloverSrc = this.originalSrc.replace(/(\.gif|\.jpg|\.png)/, "_on$1");
			});
			$('img.js-rollover, input.js-rollover').hover(function(){$(this).attr('src',this.rolloverSrc);},function(){$(this).attr('src',this.originalSrc);});
			window.onunload=function(){
				$('img.js-rollover, input.js-rollover').attr('src',this.originalSrc);
			}
		}

		// ウィンドウサイズによって強制的にグロナビを表示・非表示にする
		var NavShow = function(){

			var BP = 768,
				winW;

			$(window).on('resize',function(){
				winW = $(window).width();

				if(winW <= BP){
					$('nav').css({'display':'none'});
				}else{
					$('nav').css({'display':'block'});
				}
			});
		}

		var SPNav = function(){
			$('.sp_menu').on('click',function(){
				$('.navigation').slideToggle();
			});
		}

		var SmoothScroll = function(){
			$('a.js-smoothscroll').click(function(){
		        var speed = 500;
		        var href= $(this).attr("href");
		        var target = $(href == "#" || href == "" ? 'html' : href);
		        var position = target.offset().top;
		        $("html, body").animate({scrollTop:position}, speed, "swing");
		        return false;
		    });
		}

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

		//NavShow();
		SPNav();
		RollOver();
		SmoothScroll();
	});
})();
