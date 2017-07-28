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

});
