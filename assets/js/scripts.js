///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function() {

    $(window).scroll(function() {

        // Check the location of each desired element
        $(".galleryItem, .fade-in-scroll").each(function(i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > (object + 3000)) {
                $(this).delay(i * 100).animate({
                    top: '0px',
                    opacity: 1
                }, 500);
            }
        });
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
        $('#mobileHeaderOpen').hide(250);
        $("#mobile-header").slideDown(300);
        $('#mobileHeaderClose').slideDown(250);
    });
    $('#mobileHeaderClose').click(function() {
        $('#mobileHeaderClose').slideUp(250);
        $("#mobile-header").slideUp(250);
        $('#mobileHeaderOpen').slideDown(1000);
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

    // --------------- Filter Gallery Logic --------------- //

    if (location.search != '') {
        var url = location.search.split("?")[1];
        $('.bigGalleryItem').hide();
        $('.bigGalleryItem.' + url).show();
        if (url != 'all') {
            $('#' + url).addClass('active');
            $('#mobile-filter-list-gallery').val(url);
        } else {
            $('#all').addClass('active');
            $('#mobile-filter-list-gallery').val(url);
        }
    }

    $('#mobile-filter-list-gallery').change(function() {
        $('.bigGalleryItem').css('display', 'none');
        if ($(this).val() != 'all') {
            $('.' + $(this).val()).css('display', 'flex');
        } else {
            $('.bigGalleryItem').show();
        }
    });

    $('#filter-list li').click(function() {
        var currentFilter = $('.active');
        var clickedFilter = $(this).text();
        currentFilter.removeClass('active');
        $(this).addClass('active');
        if ($(this).text() != 'all') {
            $('.bigGalleryItem').hide();
            $('.bigGalleryItem.' + clickedFilter).show();

        } else {
            $('.bigGalleryItem').show();
        }
    });
    // ------------- End Filter Gallery Logic ------------- //


    // --------------- Filter Pricing Logic --------------- //

    $('#filter-list li').click(function() {
        var currentFilter = $(".active-pricing");
        var clickedFilter = $(this).text();
        currentFilter.removeClass('active-pricing');
        $(this).addClass('active-pricing');
        $('.pricing-panel').hide();
        $('#' + clickedFilter + '-pricing').fadeIn(300).css('display', 'flex');
    });

    $('#mobile-filter-list').change(function() {
        var currentFilter = $('.active-pricing');
        currentFilter.removeClass('active-pricing');
        var clickedFilter = $(this).val();
        $('.pricing-panel').hide();
        $('#' + clickedFilter + '-pricing').fadeIn(300).css('display', 'flex');
    });

    // ------------- End Filter Pricing Logic ------------- //

    // --------------- Likes icon animation --------------- //

    $("img#heart").click(function() {
        $(this).attr('src', '../assets/img/icons/heart.png');
        $(this).off();
    });

    // ------------- End Likes icon animation ------------- //


});

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