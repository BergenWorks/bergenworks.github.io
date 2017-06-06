// Animated scroll function for navigation
$(".nav-link, .intro-btn").click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 800)
});

// Google maps
function initMap() {
    // Custom google maps styles
    var styles = [
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": "-100"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 65
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": "50"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": "-100"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "30"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": "40"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "hue": "#ffff00"
                            },
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -97
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -100
                            }
                        ]
                    }
                ];

    var marker = { lat: 60.393747, lng: 5.327790 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: marker,
        disableDefaultUI: true,
        styles: styles
    });

    var marker = new google.maps.Marker({
        position: marker,
        map: map,
        icon: 'images/marker.png'
    });
}