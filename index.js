/* swiper js for home slides from swiperjs.com */
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
    loop:true,
});