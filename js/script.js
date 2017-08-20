$(document).ready(function() {

    //Fade in functionality - uses Animate.css
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '90%'
        });

    //Google maps starting position
        new GMaps({
        div: '.map',
        lat: 51.5088700,
        lng: -0.1273014
    });





        var userFeed = new Instafeed({
            get: 'user',
            userId: '',
            accessToken: '',
            resolution: 'standard_resolution'
        });
        userFeed.run();




      var scrollLink = $('.scroll');

      // Smooth scrolling
      scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        }, 1000 );
      });

      // Active link switching
      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 20;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })

      })


});
