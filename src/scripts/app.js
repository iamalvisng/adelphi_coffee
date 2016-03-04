$(document).ready(function() {
    smoothScroll.init({
        speed: 1000,
        easing: 'easeInOutCubic',
        updateURL: true
    });
    $(".owl-carousel").owlCarousel({
        items: 1
    });
});
