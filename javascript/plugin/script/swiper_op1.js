//const newSlide = new Swiper('.new_slide_wrap'); //기본형태
const newSlide = new Swiper('.new_slide_wrap',{
    //속성:값,
    autoplay:{
        delay:1000, //다음슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행
    },
    loop:true, //무한반복설정
    speed:1200,//애니메이션 전환시 걸리는 시간
    mousewheel:true, //웹사이즈 수직페이지 전환시에만 사용
});