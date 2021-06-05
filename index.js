// menuBar Smooth Transition
window.addEventListener('scroll', function () {
    let menu = document.getElementsByClassName('menu-header');
    let windowPosition = window.scrollY > 0;
    menu[0].classList.toggle('scrolling-active', windowPosition);
})

$(document).ready(function(){

    //Smooth Navigation Menu Scrolling
    $(".menu-header .navbar-nav .nav-link").on("click", function (e) {
        e.preventDefault();
        var navLink = $('.nav-link');
        var $this = $(this);
        navLink.removeClass('active');
        $this.addClass('active');
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top-100 }, 800);
        console.log($(href).offset().top)
    });

    //Toggling searchBar in place of MenuBar
    $('.fa-search').click(function (){
        $('.search-bar').toggle();
        $('.navbar-nav').toggle();
    })

    //Card Slider/Carousal **1 card slide per click
    $('#recipeCarousel').carousel({
        interval: 3000
    })
    $('#recipeCarousel .carousel-item').each(function(){
        var minPerSlide = 1;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    //Work-steps Carousel
    $('#stepsCarousel').carousel({
        interval: 3000
    })
    $('#stepsCarousel .carousel-item').each(function(){
        var minPerSlide = 1;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    //  Light-box Plugin
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //Filtering gallery images
    $(".list").click(function(e){
        e.preventDefault();
        var $filters = $('.filter [data-filter]');
        var $this = $(this);
        $filters.removeClass('active');
        $this.addClass('active');
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.grid-items').removeClass('is-animated')
                .fadeOut().promise().done(function() {
                $('.grid-items').addClass('is-animated').fadeIn();
            });
            // $('.grid-items').addClass('is-animated').show('1000');
        } else
        {
            $(".grid-items").removeClass('is-animated').fadeOut().promise().done(function (){
                $(".grid-items").filter('.'+value).addClass('is-animated').fadeIn();
            })
        }
    });
});

//Back To Top Smooth Scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});
$('.back-to-top').click(function(e) {
    e.preventDefault();
    $("body,html").animate({scrollTop: 0}, 800);
    return false;
})
