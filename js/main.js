
//create a variable name responsive 
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}


$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    //sticky nav bar
    
    // $(window).scroll(function(){
    //     if($(window).scrollTop()){
    //         $("nav").addClass("black");
    //     }
    //     else{
    //         $("nav").removeClass("black");
    //     }
    // })
   



    //owl-carousel for blog and properties for sliding after specified time
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        // to use our navigation instead of default
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        //to make owl-carousel responsive
        responsive: responsive
    });

     // click to scroll top
     $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

     // AOS Instance-animation on scroll
     AOS.init();



});