const eventSwiper = new Swiper('.event-swiper',{
    autoplay:{delay:2500,},
    loop:true,
    /* (기본) 페이지번호 */
    pagination:{
        el:'.event-swiper .swiper-pagination',
        type : 'bullets',
        clickable : true,
        dynamicBullets:true, //활성화에 따른 크기 차이
    },
    navigation:{
        nextEl:'.event-swiper+ .btn .next',
        prevEl:'.event-swiper+ .btn .prev',
    }
});