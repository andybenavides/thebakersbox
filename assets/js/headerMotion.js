/**
 * Created by andybenavides on 1/21/16.
 */

$(document).on("scroll", function(){

    var header = document.getElementById("logo");
    var links = document.getElementsByClassName("MenuLink");
    var logo = document.getElementById("logo");

    if ($(document).scrollTop() > 100){
        $("header").addClass("shrink");
        header.innerHTML = "the<br>bakers box<br>cafe";
        for(i=0; i<6; i++) {
            $(links[i]).addClass("MenuLinkStyle");
        }
        logo.style.color = "black";
    }
    else {
        $("header").removeClass("shrink");
        header.innerHTML = "the<br>bakers<br>box<br>cafe";
        for(i=0; i<6; i++) {
            $(links[i]).removeClass("MenuLinkStyle");
        }
        logo.style.color = "white";
    }
});

$(document).ready(function(){
    $(".contactForm").hide();
    $("#mail").click(function(){
        $(".contactForm").slideToggle(300);
    });


    //if (document.readyState === "complete") {
    //    imageChange();
    //};
});


// fade out on scroll
//$(window).scroll(function(){
//    $("#homePageSection").css("opacity", 1 - $(window).scrollTop() / 650);
//});

$(window).load(function(){
    $("header").css("opacity", 0 + $(window).scrollTop() / 550);
});


