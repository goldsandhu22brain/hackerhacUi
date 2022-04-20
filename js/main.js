// Tooltip call

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

/* Dropdown Menu Starts */
$(document).ready(function () {
    $(".dropdown").hover(
    function () {
        $('.dropdown-menu-1', this).stop(true, true).slideDown("fast");
        $(this).toggleClass('open');
    },
    function () {
        $('.dropdown-menu-1', this).stop(true, true).slideUp("fast");
        $(this).toggleClass('open');
    }
    );
});
$(document).ready(function () {
    $(".dropdown-submenu").hover(
    function () {
        $('.dropdown-menu-2', this).stop(true, true).show();
        $(this).toggleClass('open');
    },
    function () {
        $('.dropdown-menu-2', this).stop(true, true).hide();
        $(this).toggleClass('open');
    }
    );
});
/* Dorpdown Menu Ends */

// Owl Carousel call
$(document).ready(function () {
    $(".review-testi-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoPlaySpeed: 1000,
        autoPlayTimeout: 1000,
        autoplayHoverPause: true,
    });
});
$(document).ready(function () {
    $("#client-footer").owlCarousel({
        loop: true,
        margin: 50,
        items: 1,
        autoplay: true,
        autoPlaySpeed: 500,
        autoPlayTimeout: 500,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });
});

$(document).ready(function () {
    $("#home-challenges").owlCarousel({
        loop: true,
        items: 2,
        autoplay: true,
        autoPlaySpeed: 500,
        autoPlayTimeout: 500,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});