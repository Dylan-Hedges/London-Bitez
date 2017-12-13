$(document).ready(function() {

  //---------------------ANIMATIONS---------------------
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
      $('.js--wp-4').addClass('animated bounceIn');
    }, {
      offset: '70%'
    });
    $('.js--wp-5').waypoint(function(direction) {
      $('.js--wp-5').addClass('animated bounceIn');
    }, {
      offset: '80%'
    });

//---------------------SCROLLING---------------------
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
        userId: config.InstaFeedUserId,
        accessToken: config.InstafeedAccessToken,
        resolution: 'standard_resolution'
    });
    userFeed.run();


});

//---------------------MAP---------------------

function initMap() {
    //Global variable - keeps track of open infoWindows
    var activeWindow;
    //Starting position for map
    var startPosition = {lat: 51.511196, lng: -0.126274};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: startPosition
    });
    //Array of objects containing marker coordinates
    var markers = [
        {
            coords:{lat: 51.5132264, lng: -0.136422},
            content:'<p><b>BAO London</b><p>Intimate, wood-furnished space for steamed milk buns, </p><p>other inventive Taiwanese eats & drinks.</p>'
        },
        {
            coords:{lat: 51.511196,lng: -0.226274},
            content:'<p><b>Hoppers</b><p>Family-style Sri Lankan cooking and inventive cocktails</p><p>offered in vibrant, relaxed surroundings.</p>'
        },
        {
            coords:{lat: 51.513642,lng: -0.128350},
            content:'<p><b>Chick n sours</b><p>Contemporary take on a classic takeout offering sour</p><p>cocktails and fried chicken dishes.</p>'
        },
        {
            coords:{lat: 51.513619,lng: -0.134897},
            content:'<p><b>Mediterranean cafe</b><p>Mediterranean food served in intimate candlelit spaces</p><p>draped in curtains plus theatre posters.</p>'
        },
        {
            coords:{lat: 51.511425,lng: -0.121815},
            content:'<p><b>MEATmarket</b><p>Quirkily named burgers and hot dogs plus Southern-style sides</p><p>and whisky milkshakes. Few seats.</p>'
        },
        {
            coords:{lat: 51.513789,lng: -0.134910},
            content:'<p><b>Reddog saloon</b><p>All-day Vietnamese cafe for a variety of spring rolls and other</p><p>for bbq and meat dishes.</p>'
        },
        {
            coords:{lat: 51.508127,lng: -0.124037},
            content:'<p><b>Moc Kitchen</b><p>All-day Vietnamese cafe for a variety of spring rolls and other</p><p>health-focused fare in casual digs.</p>'
        },
        {
            coords:{lat: 51.513970,lng: -0.125602},
            content:'<p><b>Flesh and buns</b><p>Izakaya pub-style venue with a rock soundtrack,</p><p>serving steamed buns with meat or seafood fillings.</p>'
        },
        {
            coords:{lat: 51.514637,lng: -0.133524},
            content:'<p><b>Billy and the chicks</b><p>Fried chicken with house spices, served with cocktails</p><p>& craft beers in a hip nook with DJ tunes.</p>'
        },
        {
            coords:{lat: 51.537279,lng: -0.080837},
            content:'<p><b>The barge house</b><p>Traditional food with a Latin twist is on the menu of this airy,</p><p>bleached wood canalside bar/diner.</p>'
        },
        {
            coords:{lat: 51.444487,lng: -0.150825},
            content:'<p><b>Milk</b><p>Daytime cafe with artisan speciality coffees and innovative cuisine</p><p>at breakfast and lunch.</p>'
        },
        {
            coords:{lat: 51.505487,lng: -0.090734},
            content:'<p><b>Borough Market</b><p>food market heaven offering all the food you could dream of</p>'
        },
        {
            coords:{lat: 51.512671,lng: -0.138965},
            content:'<p><b>Le Bab</b><p>Casual Middle Eastern & Asian spot for creative shawarma & other</p><p>fare cooked over charcoal & wood.</p>'
        },
        {
            coords:{lat: 51.512547,lng: -0.138859},
            content:'<p><b>Stax diner</b><p>Gourmet burgers and popcorn shrimp in small, </p><p>first-floor, American-run cafe with food-tin lighting.</p>'
        }
        ];

    //Loop through the markers array and execute addMarker function for each object
    for(var i = 0;i < markers.length;i++){
        addMarker(markers[i]);
    }

    //Adds the markers to the google map, takes in
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map
        });

        //Creates a new infoWindow and displays content from markers Array
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

        //Executes the follow when the user clicks on a marker
        marker.addListener('click', function(){
            //Checks if an infoWindow is already open when clicking on a marker
            if(activeWindow != null){
                //Uses the google API .close() method to close the infoWindow
                activeWindow.close();
              }
              //infoWindow is then opened and variable activeWindow is not equal to null
              infoWindow.open(map, marker);
              activeWindow = infoWindow;
          });
        }
    }
}
