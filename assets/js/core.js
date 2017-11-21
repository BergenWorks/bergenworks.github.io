// Animated scroll function for navigation
$(".onepage-link, .intro-learn-more").click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    const overlay = $(".overlay-nav");

    if(overlay.is(':visible')) {
        overlay.fadeOut(150);
    }
    
    $("html, body").animate({
        scrollTop: $(target).offset().top
    }, 800);    
});

$(".nav-toggle, .overlay-nav-toggle").click(function(){

    const overlayNav = $(".overlay-nav");

    if(overlayNav.is(':visible')) {
        overlayNav.fadeOut(150);
    } else {
        overlayNav.fadeIn(150);
    }
});

var waypoint = new Waypoint({
    element: document.querySelector('.about-title'),
    handler: function(direction) {
        var nav = $(".nav-compact");

        if(direction === "down") {
            nav.stop().fadeIn(300);
        } else if(direction === "up") {
            nav.stop().fadeOut(300);         
        }
    },
    offset: '30%'
});

// Function that registers a lead when user clicks on the apply button
// Returns true to allow the href event to fire
function fbTrack() {
    fbq('track', 'Lead');
    return true;    
}
