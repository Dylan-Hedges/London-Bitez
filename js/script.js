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

//---------------------Scrolling---------------------
    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

//---------------------INSTAFEED---------------------

    var userFeed = new Instafeed({
        get: 'user',
        userId: '',
        accessToken: '',
        resolution: 'standard_resolution'
    });
    userFeed.run();


});



//---------------------MAP---------------------

function initMap() {
    //Starting position for map
    var startPosition = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: startPosition
    });
    //Array of objects containing marker coordinates
    var markers = [
        {
          coordinates:{lat:-20.363, lng: 131.044}
        },
        {
          coordinates:{lat:-22.363,lng: 131.044}
        }
        ];

    //Loop through the markers array and execute addMarker function for each object
    for(var i = 0;i < markers.length;i++){
        addMarker(markers[i]);
    }

    //Adds the markers to the google map, takes in
    function addMarker(marker){
        var marker = new google.maps.Marker({
            position:marker.coordinates,
            map:map,
        });
    }
}
