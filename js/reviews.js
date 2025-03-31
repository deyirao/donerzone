document.addEventListener("DOMContentLoaded", function () {
    let swiper;
    let currentBreakpoint = getBreakpoint(); // Store initial breakpoint

    function getBreakpoint() {
        if (window.innerWidth >= 1440) return "large";
        if (window.innerWidth >= 991) return "medium";
        return "small";
    }

    function initSwiper() {
        return new Swiper(".reviews-slider", {
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            breakpoints: {
                480: { slidesPerView: 1 },
                991: { slidesPerView: 2 },
                1440: { slidesPerView: 3 },
            },
        });
    }

    swiper = initSwiper(); // Initialize Swiper

    window.addEventListener("resize", function () {
        let newBreakpoint = getBreakpoint();

        if (newBreakpoint !== currentBreakpoint) {
            swiper.destroy(true, true); // Destroy only on breakpoint change
            swiper = initSwiper(); // Reinitialize Swiper
            currentBreakpoint = newBreakpoint; // Update current breakpoint
        }
    });
});
