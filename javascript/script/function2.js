//250110 - 구구단 함수 복습 (data5)
//1. "danInput" input요소에 사용자가 원하는 구구단 입력 후
//2. "danBtn" button요소 클릭 시
//3. "dan99" 2번 조건달성 시 호출할 수 있는 구구단 함수 생성
//3-1. (함수 안) 함수 실행 시 마다 위 1번의 입력값을 받기 위해 '매개변수' 생성
//3-2. (함수 안) 매개변수를 이용해 구구단 식 제작 2x1=2
//3-3. (함수 안) 출력하기 위한 "danResult" 변수 생성
//3-4. (함수 안) 위 변수에 대입 후 완성
const danInput = document.querySelector('#dan');
const danBtn = document.querySelector('#danBtn');
const danResult = document.querySelector('.danResult');
console.log(danInput, danBtn, danResult); //error, undefined, null check

danBtn.addEventListener('click',function(){dan99(Number(danInput.value));}) //대입값
function dan99(dan){ //변수생성
    let total = '';
    total = `${dan}X1=${dan*1}<br>`;
    total += `${dan}X2=${dan*2}<br>`;
    total += `${dan}X3=${dan*3}<br>`;
    total += `${dan}X4=${dan*4}<br>`;
    total += `${dan}X5=${dan*5}<br>`;
    total += `${dan}X6=${dan*6}<br>`;
    total += `${dan}X7=${dan*7}<br>`;
    total += `${dan}X8=${dan*8}<br>`;
    total += `${dan}X9=${dan*9}`;
    return danResult.innerHTML = total; 
/*  danResult.innerHTML = `${dan}X1=${dan*1}<br>`; //함수가 재실행될 때 이전 값을 리셋시키기 위해 처음에는 복합대입연산자를 쓰지 않는다.
    danResult.innerHTML += `${dan}X2=${dan*2}<br>`;
    danResult.innerHTML += `${dan}X3=${dan*3}<br>`;
    danResult.innerHTML += `${dan}X4=${dan*4}<br>`;
    danResult.innerHTML += `${dan}X5=${dan*5}<br>`;
    danResult.innerHTML += `${dan}X6=${dan*6}<br>`;
    danResult.innerHTML += `${dan}X7=${dan*7}<br>`;
    danResult.innerHTML += `${dan}X8=${dan*8}<br>`;
    danResult.innerHTML += `${dan}X9=${dan*9}`; */

}