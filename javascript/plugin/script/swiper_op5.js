//const newSlide = new Swiper('.new_slide_wrap'); //기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    //속성:값,
    mousewheel:true, //웹사이즈 수직페이지 전환시에만 사용
    //위 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야 함
    //slidesPerGroup:3,
    direction:'vertical',
});
const snsSlide = new Swiper('.sns_portfolio',{
    loop:true,
    speed:1200,
    autoplay:{
        delay:500,
    },
    direction:'vertical',
});
