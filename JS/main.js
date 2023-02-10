$('.owl-carousel').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:3
        // },
        // 1000:{
        //     items:5
        }
    }
})