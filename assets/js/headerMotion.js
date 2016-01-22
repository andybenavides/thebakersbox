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
        $(".contactForm").toggle(50);
    });
});