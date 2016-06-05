///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function () {

    $("#breadButton").click(function () {
        $(this).addClass("clickedButton")
            .siblings('[type="button"]')
            .removeClass("clickedButton");
        $("#breadSection").addClass("notHidden")
            .siblings()
            .removeClass("notHidden");
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
});

