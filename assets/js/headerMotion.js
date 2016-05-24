///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function () {
    $(".contactForm").hide();
    $("#mail").click(function () {
        $(".contactForm").slideToggle(300);
    });
});


$(document).on("scroll", function () {

    var links = document.getElementsByClassName("MenuLink");
    var logo = document.getElementById("logo");
    var mainHeader = document.getElementById("mainHeader");

    if ($(document).scrollTop() > 150) {
        $("header").addClass("shrink");
        $(logo).show();
        for (i = 0; i < 6; i++) {
            $(links[i]).addClass("MenuLinkStyle");
        }
        logo.style.color = "black";
        $(mainHeader).fadeOut();
    }
    else {
        $("header").removeClass("shrink");
        $(logo).hide();
        for (i = 0; i < 6; i++) {
            $(links[i]).removeClass("MenuLinkStyle");
        }
        logo.style.color = "white";
        $(mainHeader).fadeIn();
    }
});