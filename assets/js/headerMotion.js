///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function() {

    $(window).scroll(function() {

        // Check the location of each desired element
        $(".galleryItem, .fade-in-scroll").each(function(i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > (object + 3200)) {
                $(this).delay(i * 100).animate({
                    top: '0px',
                    opacity: 1
                }, 500);
            }
        });
    });

    $(".bigGalleryItem").each(function(i) {
        $(this).delay(i * 100).animate({
            top: '0px',
            opacity: 1
        }, 300);
    });

    $(".bigGalleryHeader, .bigGalleryBody").each(function(i) {
        $(this).delay(i * 700).animate({
            top: '0px',
            opacity: 1
        }, 500);
    });

    $(".delay-item").each(function(i) {
        $(this).delay(i * 250).animate({
            top: '0px',
            opacity: 1
        }, 250);
    });

    $(".delay-item-header").each(function(i) {
        $(this).delay(i * 500).animate({
            opacity: 1
        }, 750);
    });

    $('#mobileHeaderOpen').click(function() {
        $("header").animate({
            'left': '0vw'
        }, 500);
        $('#mobileHeaderOpen svg').animate({
            'left': '100vw'
        }, 500);
    });
    $('#mobileHeaderClose svg').click(function() {
        $("header").animate({
            'left': '100vw'
        }, 500);
        $('#mobileHeaderOpen svg').animate({
            'left': '0vw'
        }, 500);
    });

    // Main Page Slider

    $('.slide').first().addClass('active-slide').css('display', 'flex');
    $('.dot').first().addClass('active-dot');

    $('.arrow-next').click(function(e) {
        e.preventDefault();
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(500).removeClass('active-slide');
        nextSlide.fadeIn(500).addClass('active-slide').css('display', 'flex');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });

    $('.arrow-prev').click(function(e) {
        e.preventDefault();
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(500).removeClass('active-slide');
        prevSlide.fadeIn(500).addClass('active-slide');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });



});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$('img.svg').each(function() {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        if (!$svg.attr('veiwBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
        }

        $img.replaceWith($svg);
    }, 'xml');
});

// Parallax 

(function() {

    // get all tags with parallax class
    var parallax = document.querySelectorAll(".parallax");
    var parallax2 = document.querySelectorAll(".parallax2");

    // activate function on scroll
    window.onscroll = function() {

        // run offset on each tag individually
        [].slice.call(parallax).forEach(function(elem) {

            var windowYOffset = window.pageYOffset,
                elBackgroundPos = "0%" + (windowYOffset * 0.1) + "%";

            elem.style.backgroundPosition = elBackgroundPos;

        });

        [].slice.call(parallax2).forEach(function(elem) {

            var windowYOffset = window.pageYOffset,
                elBackgroundPos = "0%" + ((windowYOffset - 2000) * 0.1) + "%";

            elem.style.backgroundPosition = elBackgroundPos;

        });
    };
})();