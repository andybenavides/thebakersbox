/**
 * Created by andybenavides on 2/26/16.
 */

(function () {

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.3;

    window.onscroll = function () {

        [].slice.call(parallax).forEach(function (el) {

            var windowYOffset = window.pageYOffset,
                elBackgroundPos = "90%" + (-windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgroundPos

        });
    };
})();