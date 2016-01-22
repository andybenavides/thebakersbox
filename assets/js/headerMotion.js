/**
 * Created by andybenavides on 1/21/16.
 */

$(document).on("scroll", function(){

    var header = document.getElementById("logo");

    if
    ($(document).scrollTop() > 100){
        $("header").addClass("shrink");
        header.innerHTML = "Bakers Box";
    }
    else
    {
        $("header").removeClass("shrink");
        header.innerHTML = "the<br>bakers<br>box<br>cafe";
    }
});

$(document).ready(function(){
    $(".contactForm").hide();
    $("#mail").click(function(){
        $(".contactForm").slideToggle(300);
    });
});


// fade out on scroll
$(window).scroll(function(){
    $("#section1").css("opacity", 1 - $(window).scrollTop() / 650);
});

$(window).load(function(){
    $("header").css("opacity", 0 + $(window).scrollTop() / 550);
});
