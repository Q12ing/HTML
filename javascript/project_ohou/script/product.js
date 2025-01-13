//상품 썸네일 JS
//1. 작은 썸네일 이미지에 마우스를 올렸다
//2. 위 1번 대상에만 테두리가 적용된다(다른 모든 요소에 테두리가 제거)
//3. 위 1번 대상이 우측 큰 이미지에 나타났다.
//DOM Node : 작은썸네일이미지, 우측큰이미지
//속성, 메서드, 이벤트 : 마우스를 올렸다, 테두리가 적용된다, 테두리 제거, 나타났다

const thumnail = document.querySelectorAll('.thumnail a img');
const bigImage = document.querySelector('.photo .big img');

console.log(thumnail[0].src, bigImage.src);
console.log(thumnail[0].parentElement);

//두번째 썸네일(thum2.jpg)에 마우스 올렸을 때 큰 이미지 경로 (big2.jpg) 변경

thumnail[0].addEventListener('mouseover',()=>{
    bigImage.src='./images/big1.jpg'
})
thumnail[1].addEventListener('mouseover',()=>{
    bigImage.src='./images/big2.jpg'
    thumnail[1].parentElement.classList = 'active';
})
thumnail[2].addEventListener('mouseover',()=>{
    bigImage.src='./images/big3.jpg'
})
thumnail[3].addEventListener('mouseover',()=>{
    bigImage.src='./images/big4.jpg'
})
thumnail[4].addEventListener('mouseover',()=>{
    bigImage.src='./images/big5.jpg'
})