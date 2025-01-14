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
function thum_remove(){
    thumnail[0].parentElement.classList.remove('active');
    thumnail[1].parentElement.classList.remove('active');
    thumnail[2].parentElement.classList.remove('active');
    thumnail[3].parentElement.classList.remove('active');
    thumnail[4].parentElement.classList.remove('active');
}
function bigSrc(num){
    return bigImage.src=`./images/big${num}.jpg`
}
thumnail[0].addEventListener('mouseover',()=>{
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList = 'active';
});
thumnail[1].addEventListener('mouseover',()=>{
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList = 'active';
});
thumnail[2].addEventListener('mouseover',()=>{
    bigSrc(3);
    thum_remove();
    thumnail[2].parentElement.classList = 'active';
});
thumnail[3].addEventListener('mouseover',()=>{
    bigSrc(4);
    thum_remove();
    thumnail[3].parentElement.classList = 'active';
});
thumnail[4].addEventListener('mouseover',()=>{
    bigSrc(5);
    thum_remove();
    thumnail[4].parentElement.classList = 'active';
});

//=====상품 배송 도착정보 JS
//0. 변수 준비
const schedule = document.querySelector('.ship_schedule');
const scheduleOpen = document.querySelector('.schedule_open');
//1. (시작 전)도착예정 정보 숨기기
scheduleOpen.classList.add('hide');
//2. 도착예정 링크 클릭
schedule.addEventListener('click',(e)=>{
    console.log(e);
    e.preventDefault(); //a태그의 href 스크롤 위로 기능 막는 메소드
    /* JS 이벤트 대상으로 a태그 사용 시 href="#" 속성으로 인해 클릭 시 스크롤이 위로 자동으로 올라가는 문제점이 발생한다*/
    /* 해결방법 : DOM객체 클릭 시 발생하는 속성(a태그의 경우 href)는 이벤트 내 매개변수로 저장되는 특징이 있는데 이를 이용해 이벤트를 막아주는 메소드를 활용하면 위 문제를 해결할 수 있다. */
    scheduleOpen.classList.toggle('hide');
})
//3. 도착예정정보 화면 보이기
//4. 도착예정 링크 클릭
//5. 도착예정정보 숨기기

//==========================주문금액 + 주문수량 JS
//초기값 : 주문수량(0) 주문금액(0) 수량 1개당 39,900원
let price = 39900; //주문금액
let number = 0; //주문수량
let totalPrice = 0; //총 가격 저장 변수
const productNum = document.querySelector('#product_num');//수량표시DOM
const plusBtn = document.querySelector('#plus');//수량증가DOM
const minusBtn = document.querySelector('#minus');//수량감소DOM
const orderPrice = document.querySelector('.order_price .price')//최종주문표시DOM

console.log(productNum, plusBtn, orderPrice);

productNum.value = number;
orderPrice.innerText = price*number;

//1. +버튼 클릭 시 
plusBtn.addEventListener('click',()=>{
    //2. 수량 1 증가
    number++;
    productNum.value=number;
    //3. 수량에 따라 주문 금액 증가 39900*수량
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
    //orderPrice.innerText = (price*number).toLocaleString('ko-kr');
})
minusBtn.addEventListener('click',()=>{
    number--;
    productNum.value=number;
    totalPrice = price*number;
    orderPrice.innerText = totalPrice.toLocaleString('ko-kr');
})

//==========장바구니 팝업 JS
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');
console.log(cartBtn);

/* classList와 style속성 구분해서 적용하기 
객체.classList 사용
* CSS 속성 2~3개 이상 사용할 경우
* toggle, remove 교체, 삭제 등으로 다양한 경우에 사용할 경우

객체.style 사용
* CSS 속성 1~3개 적게 사용할 경우
* 객체에 CSS를 단순히 적용만 할 경우
*/

//1. 초기값 : 팝업 숨기기
cartPopup.style.display = 'none';
//2. 장바구니 클릭시
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'
    document.body.style.overflow = 'hidden';
});
//4. 팝업 내 '쇼핑 계속하기' 클릭 시
shoppingBtn.addEventListener('click',(e)=>{
    //5. 팝업 숨기기
    e.preventDefault();
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})