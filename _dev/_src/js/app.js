(function(){

	$(function(){

		// ロールオーバー
		var RollOver = function(){
			$('img.over, input.over').each(function(){
				this.originalSrc = $(this).attr('src');
				this.rolloverSrc = this.originalSrc.replace(/(\.gif|\.jpg|\.png)/, "_on$1");
			});
			$('img.over, input.over').hover(function(){$(this).attr('src',this.rolloverSrc);},function(){$(this).attr('src',this.originalSrc);});
			window.onunload=function(){
				$('img.over, input.over').attr('src',this.originalSrc);
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
	});
})();
