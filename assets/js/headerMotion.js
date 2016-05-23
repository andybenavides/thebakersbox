///**
// * Created by andybenavides on 1/21/16.
// */


$(document).ready(function(){
    $(".contactForm").hide();
    $("#mail").click(function(){
        $(".contactForm").slideToggle(300);
    });
});

