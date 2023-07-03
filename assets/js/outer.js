(function () {
    "use strict";
    document
    .querySelector('[data-toggle="offcanvas"]')
    .addEventListener("click", function () {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();
//  menu navbar toggle
jQuery('.navbar-toggler').on('click', function () {
    jQuery(this).toggleClass('change')
});
jQuery(document).ready(function() {
    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() >= 1) {
            jQuery('.top-header').addClass('fixed');
        }
        else {
            jQuery('.top-header').removeClass('fixed');
        }
    });
});

