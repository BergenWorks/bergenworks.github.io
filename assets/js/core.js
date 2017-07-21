// Animated scroll function for navigation
$(".nav-link, .logo-link, .intro-learn-more").click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 800)
});

var waypoint = new Waypoint({
    element: document.querySelector('#about'),
    handler: function(direction) {
        var nav = $(".nav-compact");

        if(direction === "down") {
            nav.stop().fadeIn(300);
        } else if(direction === "up") {
            nav.stop().fadeOut(300);         
        }
    },
    offset: '50%'
});

// Function that registers a lead when user clicks on the apply button
// Returns true to allow the href event to fire
function fbTrack() {
    fbq('track', 'Lead');
    return true;    
}