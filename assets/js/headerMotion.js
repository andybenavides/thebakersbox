///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function() {

    $(window).scroll(function() {

        // Check the location of each desired element
        $('.galleryItem').each(function(i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > (object + 3200)) {
                $(this).delay(i * 100).animate({
                    top: '0px',
                    opacity: 1
                }, 500);
            }
        });

        $('.fade-in-scroll').each(function(i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > (object + 3200)) {
                $(this).delay(i * 100).animate({
                    top: '0px',
                    opacity: 1
                }, 300);
            }
        });
    });

    $(".bigGalleryItem").each(function(i) {
        $(this).delay(i * 100).animate({
            top: '0px',
            opacity: 1
        }, 300);
    });

    $(".bigGalleryHeader").each(function(i) {
        $(this).delay(i * 700).animate({
            top: '0px',
            opacity: 1
        }, 500);
    });

    $(".contact-delay-item").each(function(i) {
        $(this).delay(i * 500).animate({
            top: '0px',
            opacity: 1
        }, 300);
    });

    // Form Validation

    // Set error flags for each field
    //    var fnLenErr, fnNumErr, messageErr, emailErr, lnLenErr, lnNumErr = false;
    //    var fnLenVal, fnNumVal, messageVal, emailVal, lnLenVal, lnNumVal = false;
    //
    //    $("#firstName").keyup(function () {
    //        if ((($(this).val().length) <= 1) && !fnLenErr) {
    //            $('.minLength').remove();
    //            $("fieldset").prepend("<p class=\"minLength err\">Please enter at least 2 characters</p>");
    //            $('.minLength').animate({opacity: 1, top: '10px'}, 150);
    //            fnLenErr = true;
    //        } else if ($(this).val().length > 1) {
    //            $(".minLength").animate({opacity: 0, top: '-10px'}, 150);
    //            fnLenErr = false;
    //            fnLenVal = true;
    //        }
    //        if ((/[0-9]/.test($(this).val())) && !fnNumErr) {
    //            $('.numErr').remove();
    //            fnNumErr = true;
    //            $("fieldset").prepend("<p class=\"numErr err\">It looks like there is a number in your name!</p>");
    //            $('.numErr').animate({opacity: 1, top: '10px'}, 150);
    //        } else if (!(/[0-9]/.test($(this).val()))) {
    //            $(".numErr").animate({opacity: 0, top: '-10px'}, 150);
    //            fnNumErr = false;
    //            fnNumVal = true;
    //        }
    //    });
    //
    //    $("#lastName").keyup(function () {
    //        if ((($(this).val().length) <= 1) && !lnLenErr) {
    //            $('.LNlenErr').remove();
    //            $("fieldset").before("<p class=\"LNlenErr err\">Please enter at least 2 characters</p>");
    //            $('.LNlenErr').animate({opacity: 1, top: '10px'}, 150);
    //            lnLenErr = true;
    //        } else if ($(this).val().length > 1) {
    //            $(".LNlenErr").animate({opacity: 0, top: '-10px'}, 150);
    //            lnLenErr = false;
    //            lnLenVal = true;
    //        }
    //        if ((/[0-9]/.test($(this).val())) && !lnNumErr) {
    //            $('.LNnumErr').remove();
    //            lnNumErr = true;
    //            $("fieldset").prepend("<p class=\"LNnumErr err\">It looks like there is a number in your name!</p>");
    //            $(".LNnumErr").animate({opacity: 1, top: '10px'}, 150);
    //        } else if (!(/[0-9]/.test($(this).val()))) {
    //            $(".LNnumErr").animate({opacity: 0, top: '-10px'}, 150);
    //            lnNumErr = false;
    //            lnNumVal = true;
    //        }
    //    });
    //
    //    $("#email").keyup(function () {
    //        if (!validateEmail($(this).val()) && !emailErr && $(this).val().length > 4) {
    //            $('.emailErr').remove();
    //            emailErr = true;
    //            $("fieldset").after("<p class=\"emailErr err\">Please enter a valid email address</p>");
    //            $('.emailErr').animate({opacity: 1, top: '10px'}, 150);
    //        } else if (validateEmail($(this).val())) {
    //            $(".emailErr").animate({opacity: 0, top: '-10px'}, 150);
    //            emailErr = false;
    //            emailVal = true;
    //        }
    //    });
    //
    //    $("#message").keyup(function () {
    //        if ($(this).val().length < 10 && !messageErr) {
    //            $('.messageErr').remove();
    //            $("textarea").before("<p class=\"messageErr err\">You gotta send me something!</p>");
    //            $('.messageErr').animate({opacity: 1, top: '10px'}, 150);
    //            messageErr = true;
    //        } else if ($(this).val().length > 10) {
    //            $(".messageErr").animate({opacity: 0, top: '-10px'}, 150);
    //            messageErr = false;
    //            messageVal = true;
    //        }
    //    });
    //
    //    // Check for valid inputs before enabling send button
    //    $('form').keyup(function () {
    //        if (!fnLenErr && !fnNumErr && !messageErr && !emailErr && !lnLenErr && !lnNumErr && ($('#message').val().length > 0))
    //            $('button').prop('disabled', false);
    //        else
    //            $('button').prop('disabled', true);
    //    });

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
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        $img.replaceWith($svg);
    }, 'xml');
});