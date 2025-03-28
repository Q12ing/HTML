//=========== 함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프)
let a;
let b = 20;
let c = 30;
//함수 내부(지역스코프)
//junction 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부
    a=10;
    console.log(a+b);
}
//선언한 함수를 사용하고 싶다면 함수 외부에서 함수를 호출해야 한다!
//호출방법 : 함수명()
test(); //전역 스코프에서 함수 결과를 보여줄 수 있도록 함수 호출
console.log(a+b); //30 

//========= 함수스코프 연습2
//최종 결과 값 순서가 6, 16으로 출력되도록 함수스코프와 호출을 이용한 문제 풀기
let x = 1;
let y;
func1(); //함수2 안에 함수1 호출식이 존재한다면 함수2 호출 할 때 함수1이 함께 출력되는 경우를 의미한다.
func2();
function func1(){
    y = 5;
    console.log(x+y);
}
function func2(){
    let z = 10;
    console.log(x+y+z);
} //선언은 어디에 있든 상관없다. 호출 순서가 중요하다! 그래서 보통 선언은 맨 하단에 두는 경우가 많다.

//<!-- 목표:접속 사용자에게 인사하는 버튼 만들기 -->
//1. 변수 생성(버튼)
const btn1 = document.getElementById('btn1');
console.log(btn1);
//2. 변수 이벤트 생성
//이벤트대상.addEventListener('이벤트종류',이벤트 만족 시 실행함수);
//이벤트 대상 == 이벤트종류를 적용하고 싶은 대상
//이벤트종류 => 태그의 인라인script로 적용시 on을 붙이고 스크립트에서 바로 작성 시 on없이 바로 이벤트만 작성한다.
btn1.addEventListener('click',function(){
    alert('살려주세요ㅠㅠ!');
})

//<!-- 목표:버튼 클릭 시 1+1 답에 대한 입력창 제공 후 입력창 띄우기 -->
//1. 변수 생성(버튼)
const btn2 = document.querySelector('#btn2');
//2.변수 이벤트 생성
btn2.addEventListener ('click',function(){
    //3. 1+1 답을 입력받을 수 있는 질문 창 제공 후 답 받기
    let result = prompt('1+1에 대한 답을 쓰세요');
    //4. 위 3에서 받은 값을 팝업창으로 다시 띄우기
    alert(result);
})

// <!-- 목표:+버튼을 클릭할때마다 input의 value가 1씩 증가/감소하기 -->
//1. 제어 노드 변수 생성하기
const numMinus = document.querySelector('#numMinus');
const numPlus = document.querySelector('#numPlus');
const num = document.querySelector('#num');
console.log(num,numPlus);
//2. 위 1에서 생성한 변수 중 이벤트 대상에 해당되는 것부터 작성하기.
numPlus.addEventListener ('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //기존 수량의 값에 1을 더해서 수량칸에 대입하기
    num.value=Number(num.value)+1 //Number() -> 문자를 숫자로 변환시켜주는 메소드
    console.log(typeof(num.value));//데이터타입확인메소드
})
numMinus.addEventListener ('click', function(){
    num.value=num.value-1
})

//<!-- 목표 1. : 위 input 2개 무시하고 prompt이용 월급, 보너스를 적고 총 수입 계산하기 버튼을 클릭하면 prompt에 입력한 결과 출력하기 -->
//1. 월급 입력받기 prompt
const price1 = document.querySelector('#price1');
//2. 보너스 입력받기 prompt
const price2 = document.querySelector('#price2');
//3. 계산 버튼 클릭시 객체 변수 설정 click
const total=document.querySelector('#total');
total.addEventListener ('click',function(){
    //4.월급+보너스 더하기 +
    const total_price=Number(price1.value)+Number(price2.value)
    //5. 더한 결과 출력 console
    console.log(total_price)
});