$(document).ready(function() {

    //Fade in functionality - uses Animate.css
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '90%'
        });

        $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
        }, {
            offset: '90%'
        });

        $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated jackInTheBox');
        }, {
            offset: '80%'
        });

        $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
        }, {
            offset: '70%'
        });




    //Google maps starting position
        new GMaps({
        div: '.map',
        lat: 51.5088700,
        lng: -0.1273014
    });


      var scrollLink = $('.scroll');

      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });




         var userFeed = new Instafeed({
            get: 'user',
            userId: '',
            accessToken: '',
            resolution: 'standard_resolution'
        });
        userFeed.run();

});
