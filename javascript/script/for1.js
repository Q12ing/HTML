//반복문 for
//for(초기값; 조건식; 증감식) {조건이 참일때 실행구문}
//반복문 없이 '자바스크립트' 3번 반복
for(let i=1; i<=3; i++){
    console.log('자바스크립트'+i);
}
const subject=['html','css','photoshop','illustrator','javascript']
for(let i=0; i<=4; i++){
    console.log(subject[Number(i)]);
}
const kiosk=['아메리카노','카페라떼','카푸치노','돌체라떼','에스프레소','우유','녹차라떼','소이라떼','밀크티']
//출력 예) 주문하신 아메리카노 나왔습니다.
console.log(kiosk);
for(let i=0; i<=kiosk.length-1; i++){
    console.log(`주문하신 ${kiosk[i]} 나왔습니다. :D`);
}
//leng속성 없이 숫자값과 for문으로 역순으로 메뉴 출력하기
for(let i=8; i>=0; i--){
    console.log(`주문하신 ${kiosk[i]} 나왔습니다. :)`);
}
for(let i=Number(kiosk.length)-1; i>=0; i--){
    console.log(`주문하신 ${kiosk[i]} 나왔습니다. :>`);
}

console.log('===================반복문과 조건문');
for(let i=1; i<21; i++){
    if(i%2) {console.log(i)}
}

const listLi = document.querySelectorAll ('.list li');
console.log(listLi);

for(let i=0; i<listLi.length; i++){
    /* 홀수(aqua) 짝수(yellow) */
    if(i%2){listLi[i].style.backgroundColor = 'aqua'}
    else{listLi[i].style.backgroundColor = 'yellow'}
}

console.log("======================for in 객체접근 반복문")
let str1 ='가나다라마바사';
let cat1 = {
    color:['white','black'],
    age:2,
    name:'고양이'
}
for(let i in str1) console.log(i)
for(let i in cat1){
    //console.log(i);//객체속성접근
    console.log(cat1[i])//대입값에 접근
    console.log(i, cat1[i])//객체속성 + 대입값에 접근
}

console.log("======================배열, DOM접근 for of")
const fruit = ['바나나','딸기','배','귤','망고'];
for(let i of fruit)console.log(i);
for(let i of listLi){
    console.log(i);
    i.addEventListener('mouseover',()=>{
        i.style.borderBottom='2px solid #000'
    })
    i.addEventListener('mouseout',()=>{
        i.style.border='0'
    })
}

console.log ('===================회원가입약관동의')
//1. 전체동의 클릭시
//2. 선택동의 1 ~ 4 모두 선택
//3. 전체동의 클릭 시
//4. 선택동의 1 ~ 4 모두 해제
//1~4 반복

const checkAll = document.querySelector('#all');
const checkSelect = document.querySelectorAll('.select input[name=agree]');
console.log(checkAll, checkSelect);

checkAll.addEventListener('click',()=>{
    //console.log(checkAll.checked);
/*     checkSelect[0].checked = checkAll.checked;
    checkSelect[1].checked = checkAll.checked;
    checkSelect[2].checked = checkAll.checked;
    checkSelect[3].checked = checkAll.checked; */
    for(let i of checkSelect){
        i.checked=checkAll.checked;
    }
})