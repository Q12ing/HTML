/* 스크롤을 감지하는 이벤트 scroll, wheel(마우스 휠 동작 / 터치스크린에는 반응 X) */
/* 스크롤 이벤트 적용 객체는 가능한 window를 사용한다. */
window.addEventListener('wheel',function(){
    console.log(box[2].offsetTop)
    console.log(box[2].getBoundingClientRect().y)
    //console.log('scroll')
    if(this.window.scrollY > box[1].offsetTop-100) topDiv.style.right='50px'
    else topDiv.style.right='-70px'
})
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',function(e){
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

//위로 클릭 시 스크롤 이동시키기\
const box = document.querySelectorAll('.box')
const topDiv = document.querySelector('.top')
topDiv.addEventListener('click',function(){
    window.scrollTo({left:0, top:box[1].offsetTop})
    //window.scrollTo(0,0)
    //window.scrollTo({left:0, top:0, behavior:'smooth'})

})