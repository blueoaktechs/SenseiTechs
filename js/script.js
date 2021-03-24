(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    
    $(".1").click(function () {
        $(".1").addClass("active");
        $(".2").removeClass("active");
        $(".3").removeClass("active");
        $(".4").removeClass("active");
        $(".5").removeClass("active");
    });  
    $(".2").click(function () {
        $(".1").removeClass("active");
        $(".2").addClass("active");
        $(".3").removeClass("active");
        $(".4").removeClass("active");
        $(".5").removeClass("active");
    });  
    $(".3").click(function () {
        $(".1").removeClass("active");
        $(".2").removeClass("active");
        $(".3").addClass("active");
        $(".4").removeClass("active");
        $(".5").removeClass("active");
    });  
    $(".4").click(function () {
        $(".1").removeClass("active");
        $(".2").removeClass("active");
        $(".3").removeClass("active");
        $(".4").addClass("active");
        $(".5").removeClass("active");
    });  
    $(".5").click(function () {
        $(".1").removeClass("active");
        $(".2").removeClass("active");
        $(".3").removeClass("active");
        $(".4").removeClass("active");
        $(".5").addClass("active");
    });

})(jQuery); // End of use strict
