//일정 시간 후 한번 실행하고 끝나는 setTimeout 함수
//const 변수명 = setTimeout(실행함수, 시간)
//setTimeout(실행함수, 시간)
//setTimeout 내 함수를 별도로 생성하고 타이머안에서 호출식으로도 많이 이용한다.
const timer1 = setTimeout(function(){
    console.log('한 번 실행하는 문구')
},2000)
const timer2 = setTimeout(test,1000);
function test(){
    //return alert('한 번 실행하는 경고창')
}

const btn=document.querySelector ('#btn');
btn.addEventListener('click',()=>{
    clearTimeout(timer2)
    console.log('timer2 정지')
    clearTimeout(timer1)
    console.log('timer1 정지')
})

//무한으로 반복되며 올라가는 공지사항
//공지1->2->3->4->공지1->2->3->4->반복
//목표1. 공지1->2->3->4
//어느방향으로 이동하는지, 그 방향에 따른 가로, 세로 크기는 무엇인지 체크하기!
//아래 -> 위로 이동한다 == top, translateY, 크기 == 세로크기
//좌 -> 우로 이동한다 == top, translateX, 크기 == 가로크기 
//2. 가로 또는 세로 크기가 결정됐다면? 이동 요소 개수가 몇개인지 인덱스 체크하기!
//세로로 이동한다면? 세로크기*인덱스 계산해야함.
//3. 변수 준비
//공지 1,2,3,4를 모두 가지고 있는 움직이는 대상 ul "newsList"
//개별요소 파악을 위한 li"newsItems"
//개별요소 크기 "itemsHeight"
//인덱스 "currentIndex"

const newsList = document.querySelector('#list');
const newsItems = document.querySelectorAll('#list li');
const itemsHeight = newsItems[0].offsetHeight; //해당요소의 크기를 인식
let currentIndex = 0;
console.log(newsItems, newsList, itemsHeight, currentIndex)

const newsTimer = setInterval(()=>{
    currentIndex++;
    newsList.style.transform = `translateY(-${currentIndex*itemsHeight}px)`
    newsList.style.transition = 'transform 0.5s ease';
    
    //모든 list가 이동했을 때 초기화 하는 조건문과 setTimeout
    if(currentIndex==newsItems.length){
        console.log('초기화 조건문 실행');
        setTimeout(()=>{
            currentIndex=0;
            newsList.style.transition = 'none';
            newsList.style.transform = 'translateY(0)';
        },500)/* 트랜지션 시간과 동일하게 설정 */
    }
},1000)
/* 무한스크롤 동작을 위한 원본 공지사항 복제 후 리스트 끝에 추가하기 */
for(let i of newsItems){
    const clone = i.cloneNode(true); //i의 자식 자손까지 포함하여 복제하겠다.-> 변수에 담겠다.
    newsList.appendChild(clone);
}

//====================================================================
//공지 1,2,3,4를 모두 가지고 있는 움직이는 대상 ul "newsList"
//개별요소 파악을 위한 li"newsItems"
//개별요소 크기 "itemsHeight"
//인덱스 "currentIndex"
const newsList2 = document.querySelector('.news_container2 #list2');
const newsItems2 = document.querySelectorAll('.news_container2 #list2 li');
const itemsWidth = newsItems2[0].offsetWidth;
let currentIndex2 = 0;
console.log(newsItems2, newsList2, itemsWidth, currentIndex2)

const newsTimer2 = setInterval(()=>{
    currentIndex2++;
    newsList2.style.transform = `translateX(-${currentIndex2*itemsWidth}px)`
    newsList2.style.transition = 'transform 0.5s ease';
    if(currentIndex2==newsItems2.length){
        setTimeout(()=>{
            currentIndex2=0;
            newsList2.style.transition = 'none';
            newsList2.style.transform = 'translateX(0)';
        },500)
    }
},1000)
for(let i of newsItems2){
    const clone = i.cloneNode(true);
    newsList2.appendChild(clone);
}