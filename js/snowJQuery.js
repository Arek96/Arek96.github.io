$("doucment").ready(function(){
    $('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    dots:true,
        items:1
    });
$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    dots:false,
    responsiveClass: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    $('.owl-three').owlCarousel({
    loop:true,
    margin:30,
    center:true,
    dots:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:3
        }
    }
});
});