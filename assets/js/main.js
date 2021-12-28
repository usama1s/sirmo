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
$(document).click(function (e) {
    if($('.collapse').hasClass('show') && !$('nav').is(e.target) && $('nav').has(e.target).length === 0){
        $('.navbar-toggler').click()
    }
});
