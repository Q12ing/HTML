const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{delay:3000,},
    loop:true,
    pagination: {
        el: ".main_swiper .swiper-pagination",
    },
});

const allModelsSwiper = new Swiper('.all_models_swiper',{
    loop:true,
    slidesPerView:1.8,
    spaceBetween:30,
    centeredSlides:true,
    pagination: {
        el: ".all_models_swiper .swiper-pagination",
        clickable:true,
    },
});