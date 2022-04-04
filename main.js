var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInterection: false,
    },
    speed: 800,
});