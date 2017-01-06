(function(){

	$(function(){

        var w = $(window).width;

        if(w > 1200){

            var sc = $(window).scrollTop();

            if(sc < 320){
                $('.ttl').addClass('is-active');
            }

            if(sc < 800 && sc > 600){
                $('.item-03').animate({
                    'top': '1140px',
                    'left': '212px'
                }, 1000);
            }

            if(sc > 2450){
                $('.item-08').addClass('is-active');
            }

            $(window).on('scroll resize', function(){
                sc = $(window).scrollTop();
                console.log(sc);

                if(sc < 320){
                    $('.ttl').addClass('is-active');
                }

                if(sc < 800 && sc > 600){
                    $('.item-03').animate({
                        'top': '1140px',
                        'left': '212px'
                    }, 1000);
                }

                if(sc > 1200 && sc < 1800){
                    $('.item-06').animate({
                        'top': '1876px',
                        'right': '335px'
                    }, 5000);
                }

                // if(sc > 2450){
                //     $('.item-08').addClass('is-active');
                // }

            });
        }



  });
})();
