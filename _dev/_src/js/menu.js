(function(){

	$(function(){
    var scene;
    var y = window.pageYOffset;

    scene(y);

    $(window).on('scroll', function(){
      y = window.pageYOffset;
      scene(y);
    });

    function scene(y){
      if(y >= 7900){
        $('#js-birdArea .scene-01').removeClass('is-active');
        $('#js-birdArea .scene-02').addClass('is-active');
      }else if(100 <= y){
        $('#js-birdArea .scene-01').addClass('is-active');
        $('#js-birdArea .scene-02').removeClass('is-active');
      }else{
        $('#js-birdArea .scene-01').removeClass('is-active');
        $('#js-birdArea .scene-02').removeClass('is-active');
      }
    };

  });

})();
