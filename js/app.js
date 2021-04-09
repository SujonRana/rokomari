$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:false,
    navText:['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})