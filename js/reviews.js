document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".reviews-slider", {
        loop: true,
        spaceBetween: -100,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1440: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            },
        },
    });
});