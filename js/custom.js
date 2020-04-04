$(function(){

    $('.counterup').counterUp({
        delay: 10,
        time: 1000
    });

    $('.testimonial-carousel').slick({
        arrows: true,
        autoplay: true,
        autoplay: 1500
    });

    // back-to-top
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 500){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });

    //==== Animate the scroll to top
    $('.back-to-top').on('click', function(e) {
        e.preventDefault();

        $('html').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    // preloader
    $(window).on('load', function(event) {
        $('.preloader').delay(1000).fadeOut(500);
    });


    // smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        offset: 100,
        updateURL: false
    });

 //===== Sticky
    
$(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll < 245) {
        $(".navigation").removeClass("sticky");
    } else{
        $(".navigation").addClass("sticky");
    }
});


});
