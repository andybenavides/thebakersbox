///**
// * Created by andybenavides on 1/21/16.
// */
//
//$(document).on("scroll", function(){
//
//    var logoheader = document.getElementById("logo");
//    var links = document.getElementsByClassName("MenuLink");
//
//    if ($(document).scrollTop() > 170){
//        $("header").addClass("shrink");
//        logoheader.innerHTML = "bakers<br>box";
//        for(i=0; i<6; i++) {
//            $(links[i]).addClass("MenuLinkStyle");
//        }
//        logoheader.style.color = "#002833";
//    }
//    else {
//        $("header").removeClass("shrink");
//        logoheader.innerHTML = "the<br>bakers<br>box<br>cafe";
//        for(i=0; i<6; i++) {
//            $(links[i]).removeClass("MenuLinkStyle");
//        }
//        logoheader.style.color = "white";
//    }
//});

$(document).ready(function(){
    $(".contactForm").hide();
    $("#mail").click(function(){
        $(".contactForm").slideToggle(300);
    });


    //if (document.readyState === "complete") {
    //    imageChange();
    //};
});


//fade out on scroll
//$(window).scroll(function(){
//    $(".indentSection").css("opacity", 1 - $(window).scrollTop() / 250);
//})
//
//$(window).load(function(){
//    $("header").css("opacity", 0 + $(window).scrollTop() / 150);
//});
//
//
