//논리데이터 확인 true or flase
// true(1) false(0)
//논리데이터(boolean)을 다른 숫자데이터와 연결하면 1,0으로 처리하여 계산된다.
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(true+10); //11
console.log(typeof(false+5)); //number

//=========================불린함수활용 falsy or truthy
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean('')); //=====여기까지 모두 falsy값
console.log(Boolean('JS'));
console.log(Boolean(1234));
console.log(Boolean(-1234));
console.log(Boolean({})); //빈객체
console.log(Boolean([])); //빈배열=====여기까지 모두 truthy값

//=========================비교 연산자
//1. 일치(동등)연산자 : 좌우 값이 같은가? 같으면 참, 다르면 거짓
console.log('4'==4); //true
console.log('4'===4); //false
console.log('4'==='4'); //true
//2. 부등(불일치)연산자 : 좌우 값이 다른가? 다르면 참, 같으면 거짓
console.log(10!='10');//false
console.log(100!=='10');//true
console.log(10!==10);//true
//3. 대소 비교 연산자 : 작다, 크다, 크거나 같다, 작거나 같다
let  x = 5;
let y = 7;
console.log(x<y); //true
console.log(x>y); //false
console.log(x>=y); //false
console.log(x<=y); //true

console.log(x === y); //false 5===7
console.log(5 === 5); //true
console.log('====================================');

//=========================논리연산자 AND(&&) OR(||) NOT(!)
function print(value){
    const message = value || 'web';
    return console.log(message);
}
print(1);
print(0);
print([]);

function bool(value){ //함수 내에서 생성한 매개변수는 이름중복가능
    const message = !value //함수 내에서 생성한 지역변수는 이름중복가능
    return console.log(message);
}

bool(1);
bool(0);
bool([]);
bool(null);
console.log('====================================');

let a = 5;
let b = a+10;
let total = a > b ? 'a는 b보다 크다':'a는 b보다 작다';
console.log(total);

//나이에 따라 성인/미성년자를 구분하는 JS
let age = prompt('몇살인가요?');
//사용자가 대답한 값에 따라서 '성인' '미성년자' 콘솔 출력 18세 이상 기준
total = age >= 18 ? '성인':'미성년자';
console.log(total);

//========================================
//1. "textarea" 사용자 리뷰 작성
//2. "reviewBtn" 리뷰 등록하기 버튼 클릭
//3. "result" (리뷰 100자 이상인 경우) '등록완료됐습니다' 팝업출력
//4. (리뷰 100자 미만인 경우) '100자 이상 작성하셔야 합니다.' 팝업출력

const textarea = document.querySelector('#review');
const reviewBtn = document.querySelector('#reviewBtn');
reviewBtn.addEventListener('click',()=>{
    let result = alert(textarea.value.length >= 100 ? '등록완료됐습니다':'100자 이상 작성하셔야 합니다');
})

//======================================
//1. 초기값 1개당 12500원, 재고 10개 제한
//2. 사용자가 +클릭 시 수량이 1씩 증가한다
//3. 구입수량이 10개 이상이면 +버튼 클릭 시 '최대구매수량입니다' 출력
//4. 구입수량이 1개 미만이면 -버튼 클릭 시 '최소구매수량입니다' 출력

let price = 12500; //가격
let stock = 10; //재고
let number = 1; //수량
let result_num; //삼항조건식 결과 담는 변수

const num = document.querySelector('#num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const priceNode = document.querySelector('.price span');

num.value=number; 
priceNode.innerText = price;
/* innerText, textContent(속도빠름) */

plusBtn.addEventListener('click',()=>{
    //조건결과를담는변수 = 조건식 ? 조건이참일때결과 : 조건이거짓일때결과;
    result_num = number >= 10 ? alert('최대구매수량입니다') : number++;
    num.value = number;
    priceNode.innerText = (price*number).toLocaleString('ko-kr');
})

minusBtn.addEventListener('click',()=>{
    result_num = number <= 1 ? alert('최소구매수량입니다') : number--;
    num.value=number;
    priceNode.innerText = (price*number).toLocaleString('ko-kr');
})

console.log('=========================if 조건문');
let box1 = 30;
let box2 = 20;
//if(조건식){조건결과가 참일때 실행결과}else{조건결과가 거짓일때 실행}
if(box1 === box2){console.log('참');}

//상황1. 관리자만 접속 가능한 페이지
//관리자 ID : admin
//1. 아이디칸에 아이디를 입력후
//2. 로그인 버튼을 클릭한다.
//3. 아이디가 'admin'일 경우
//4. '관리자님 어서오세요' 창이 출력된다.

const userId=document.querySelector('#user_id');
const loginBtn=document.querySelector('#loginBtn');
console.log(userId, loginBtn);

loginBtn.addEventListener('click',()=>{
    if(userId.value==='admin'){
        alert('관리자님 어서오세요');
    }
    console.log(userId.value==='admin')
})

//===================================
//나머지 연산자 %
console.log(2%4); //2
console.log(4%2); //0
//자바 스크립트 나머지 연산자 0,1=홀,짝 구분 목적 
//true+5=6
//flase+5=5
//falsy 거짓으로 인식하는 숫자 값 0
//truthy 참으로 인식하는 숫자 값 0이 아닌 모든 값 (대표 1)
//심리테스트 결과 함수

function testFunc(data1,data2){
    //const txt = '당신이 선택한 숫자 ?는 ?수 입니다! ?수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다.';
    let txt = `당신이 선택한 숫자 ${data1}는 ${data2}수입니다!`
    txt += `${data2}수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다.`
    return txt;
}

const testNum = document.querySelector('#test_num');
const testBtn = document.querySelector('#testBtn');
const testResult = document.querySelector('.testResult');
console.log(testNum, testBtn, testResult);

testBtn.addEventListener('click',()=>{
    //홀수
    if(testNum.value%2==1){
        testResult.innerHTML = testFunc(testNum.value,'홀');
    }else{//위 if조건식이 거짓일 경우 자동 실행
        testResult.innerHTML = testFunc(testNum.value,'짝');}
});