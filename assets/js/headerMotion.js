///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function () {

    $("#breadButton").click(function () {
        $(this).addClass("clickedButton").siblings('[type="button"]').removeClass("clickedButton");
        $("#breadSection").addClass("notHidden").siblings().removeClass("notHidden");
    });

    $("#cookiesButton").click(function () {
        $(this).addClass("clickedButton")
            .siblings('[type="button"]')
            .removeClass("clickedButton");
        $("#cookiesSection").addClass("notHidden").siblings().removeClass("notHidden");
    });

    $("#cupcakesButton").click(function () {
        $(this).addClass("clickedButton")
            .siblings('[type="button"]')
            .removeClass("clickedButton");
        $("#cupcakesSection").addClass("notHidden").siblings().removeClass("notHidden");

    });

    $("#rollsButton").click(function () {
        $(this).addClass("clickedButton")
            .siblings('[type="button"]')
            .removeClass("clickedButton");
        $("#rollsSection").addClass("notHidden").siblings().removeClass("notHidden");

    });

    // Change color of link when currently on page
    $("header [href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });

    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hide-me').each(function (i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > object) {
                $(this).fadeIn();
            }
        });

        $('.galleryItem').each(function (i) {
            var object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > (object+1700)) {
                $(this).delay(i * 200).animate({top: '0px', opacity: 1},600);
            }
        });
    });

    // Form Validation

    // Set error flags for each field
    var fnLenErr, fnNumErr, messageErr, emailErr, lnLenErr, lnNumErr = false;
    var fnLenVal, fnNumVal, messageVal, emailVal, lnLenVal, lnNumVal = false;

    $("#firstName").keyup(function () {
        if ((($(this).val().length) <= 1) && !fnLenErr) {
            $('.minLength').remove();
            $("fieldset").prepend("<p class=\"minLength err\">Please enter at least 2 characters</p>");
            $('.minLength').animate({opacity: 1, top: '10px'}, 150);
            fnLenErr = true;
        } else if ($(this).val().length > 1) {
            $(".minLength").animate({opacity: 0, top: '-10px'}, 150);
            fnLenErr = false;
            fnLenVal = true;
        }
        if ((/[0-9]/.test($(this).val())) && !fnNumErr) {
            $('.numErr').remove();
            fnNumErr = true;
            $("fieldset").prepend("<p class=\"numErr err\">It looks like there is a number in your name!</p>");
            $('.numErr').animate({opacity: 1, top: '10px'}, 150);
        } else if (!(/[0-9]/.test($(this).val()))) {
            $(".numErr").animate({opacity: 0, top: '-10px'}, 150);
            fnNumErr = false;
            fnNumVal = true;
        }
    });

    $("#lastName").keyup(function () {
        if ((($(this).val().length) <= 1) && !lnLenErr) {
            $('.LNlenErr').remove();
            $("fieldset").before("<p class=\"LNlenErr err\">Please enter at least 2 characters</p>");
            $('.LNlenErr').animate({opacity: 1, top: '10px'}, 150);
            lnLenErr = true;
        } else if ($(this).val().length > 1) {
            $(".LNlenErr").animate({opacity: 0, top: '-10px'}, 150);
            lnLenErr = false;
            lnLenVal = true;
        }
        if ((/[0-9]/.test($(this).val())) && !lnNumErr) {
            $('.LNnumErr').remove();
            lnNumErr = true;
            $("fieldset").prepend("<p class=\"LNnumErr err\">It looks like there is a number in your name!</p>");
            $(".LNnumErr").animate({opacity: 1, top: '10px'}, 150);
        } else if (!(/[0-9]/.test($(this).val()))) {
            $(".LNnumErr").animate({opacity: 0, top: '-10px'}, 150);
            lnNumErr = false;
            lnNumVal = true;
        }
    });

    $("#email").keyup(function () {
        if (!validateEmail($(this).val()) && !emailErr && $(this).val().length > 4) {
            $('.emailErr').remove();
            emailErr = true;
            $("fieldset").after("<p class=\"emailErr err\">Please enter a valid email address</p>");
            $('.emailErr').animate({opacity: 1, top: '10px'}, 150);
        } else if (validateEmail($(this).val())) {
            $(".emailErr").animate({opacity: 0, top: '-10px'}, 150);
            emailErr = false;
            emailVal = true;
        }
    });

    $("#message").keyup(function () {
        if ($(this).val().length < 10 && !messageErr) {
            $('.messageErr').remove();
            $("textarea").before("<p class=\"messageErr err\">You gotta send me something!</p>");
            $('.messageErr').animate({opacity: 1, top: '10px'}, 150);
            messageErr = true;
        } else if ($(this).val().length > 10) {
            $(".messageErr").animate({opacity: 0, top: '-10px'}, 150);
            messageErr = false;
            messageVal = true;
        }
    });

    // Check for valid inputs before enabling send button
    $('form').keyup(function () {
        if (!fnLenErr && !fnNumErr && !messageErr && !emailErr && !lnLenErr && !lnNumErr && ($('#message').val().length > 0))
            $('button').prop('disabled', false);
        else
            $('button').prop('disabled', true);
    });

    var modal = $('.modal-wrapper');
    var button = $('#learn-more');
    var close = $('.close');

    button.click(function(){
       modal.show(100);
    });
    close.click(function(){
        modal.hide(100);
    });

    $(window).click(function(event){
        if(event.target == modal){
            modal.hide();
        }
    })

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
