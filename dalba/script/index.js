const mainDot = document.querySelectorAll('.main_bnr .main_dot li');
const mainSlide = document.querySelectorAll('.main_swiper .swiper-slide');
console.log(mainDot, mainSlide)
const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{
        delay:1000,
    },
    loop:true,
    effect:'fade',
    on:{
        slideChange:function(e){
            for(let i of mainDot){
                i.classList.remove('.dot_active');
                this.realIndex+1==mainDot[e.realIndex].classList.add('.dot_active');
            }
        },
    },
})

/* pagination:{
    el:'.main_bnr .main_dot',   //요소 선택(CSS선택자 작성방식으로)
    type:'fraction',   //모양 설정 bullets(기본값), fraction, progressbar
    clickable:true,},   //페이지번호 클릭으로 해당 슬라이드 이동 가능}*/