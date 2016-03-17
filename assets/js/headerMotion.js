///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function(){
    $(".contactForm").hide();
    $("#mail").click(function(){
        $(".contactForm").slideToggle(300);
    });

    $(window).scroll(function(){
        $(".mainHeader").css("opacity", 1 - $(window).scrollTop() / 350);
    });
});

