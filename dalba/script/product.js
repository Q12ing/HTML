/* 쉐어 버튼 클릭 */
const share=document.querySelector('.share');
console.log(share);
share.addEventListener('click',()=>{
    window.alert('링크가 복사되었습니다.')
})

/* 배송정보 */
const schedule = document.querySelector('.schedule');
const scheduleOpen = document.querySelector('.schedule_open');
console.log(schedule, scheduleOpen)
scheduleOpen.classList.add('hide');
schedule.addEventListener('click',(e)=>{
    e.preventDefault();
    scheduleOpen.classList.toggle('hide');
});

/* 총금액 */
let price50 = 27000; //주문금액
let number50 = 1; //주문수량
const plusBtn50 = document.querySelector('.plus50');//수량증가DOM
const minusBtn50 = document.querySelector('.minus50');//수량감소DOM
const orderPrice50 = document.querySelector('.op_total50')//최종주문표시DOM
let op50Num=document.querySelector('#op50ml_num');

let price100 = 34000; //주문금액
let number100 = 1; //주문수량
const plusBtn100 = document.querySelector('.plus100');//수량증가DOM
const minusBtn100 = document.querySelector('.minus100');//수량감소DOM
const orderPrice100 = document.querySelector('.op_total100')//최종주문표시DOM
let op100Num=document.querySelector('#op100ml_num');

let totalPrice = 0; //총 가격 저장 변수


plusBtn50.addEventListener('click',()=>{
    number50++; // 수량 증가
    op50Num.value = number50; // input 값 업데이트
    let total50 = number50 * price50; // 총 금액 계산
    orderPrice50.innerText = total50.toLocaleString('ko-kr');
})
minusBtn50.addEventListener('click',()=>{
    if(number50==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        number50--;
        op50Num.value = number50;
        let total50=innerText=number50*price50;
        orderPrice50.innerText=total50.toLocaleString('ko-kr');
    }
})
plusBtn100.addEventListener('click',()=>{
    number100++;
    op100Num.value = number100;
    let total100=innerText=number100*price100;
    orderPrice100.innerText=total100.toLocaleString('ko-kr');
})
minusBtn100.addEventListener('click',()=>{
    if(number100==1){
        window.alert('최소 수량은 1개 입니다.')
    }else{
        number100--;
        op100Num.value = number100;
        let total100=innerText=number100*price100;
        orderPrice100.innerText=total100.toLocaleString('ko-kr');
    };
})
$(.close).click.hide;


/* 장바구니 버튼 클릭 상호 작용 */
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.cart_container .link a:nth-child(1)');
//1. 초기값 : 팝업 숨기기
cartPopup.style.display = 'none';
//2. 장바구니 클릭시
cartBtn.addEventListener('click',()=>{
    cartPopup.style.display = 'block'
});
//4. 팝업 내 '쇼핑 계속하기' 클릭 시
shoppingBtn.addEventListener('click',(e)=>{
    //5. 팝업 숨기기
    e.preventDefault();
    cartPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
})