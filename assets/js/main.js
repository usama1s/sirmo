$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
        $("header").addClass("scrolled");
    }
    else {
        $("header").removeClass("scrolled");
    }
});


$(function(){
    $('.selectpicker').selectpicker();
});
