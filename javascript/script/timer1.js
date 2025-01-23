//타이머함수
//일정시간마다 반복하는 setInterval
//setInterval(실행함수, 실행시간)
//const 타이머변수 = setInterval(실행함수, 실행시간) //나중에 정지 시키고 싶을 때 변수로 만듬
/* let num = 5;
const timerDiv = document.querySelector('.timer');
const timer1 = setInterval(function(){
    //console.log('timer'+num)
    timerDiv.textContent = num;
        num--;
    //if(num==0){window.location.href="https://google.com";}
},1000); */

console.log('==============================');
//애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
let num=0;
const boxTimer=document.querySelector('.box_timer');
let timer2=setInterval(timerFunc,1000);
function timerFunc(){
    num++;
    boxTimer.innerText=`진행시간 : ${num}초`;
}

//stop버튼 클릭 시 진행시간, 애니메이션이 모두 정지(paused)
const boxAni = document.querySelector('.box');
//stop버튼 클릭 시 진행시간, 애니메이션이 다시 재생(running)
const stopBtn=document.querySelector('#stop');
const replayBtn=document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer2);
    //boxAni.style.animation='none';
    boxAni.style.animationPlayState='paused';
})
replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState='running';
    timer2=setInterval(timerFunc,1000);
})

//한 글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; //글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');
function writer(){
    if(i<=text.length){
        if (i==9) textSpan.innerHTML+='<br>'; //줄바꿈
        textSpan.innerHTML += text.charAt(i);
        i++;
        console.log(i, text.charAt(i))
    } else {console.log('타이머 종료'); clearInterval(timer3);}
}
const timer3 = setInterval(writer,200);
writer() //함수호출