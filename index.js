/* swiperjs javascript code for home slides from swiperjs.com */
var swiper = new Swiper(".container", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

/* swiperjs javascript code for review slides */
var swiper = new Swiper(".review-block", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    loop: true,
});