//QR코드 메세지팝업 X 닫기 기능
//1. "messageX" X 클릭했을 때
//2. "messagePopup" QR코드 메세지팝업 숨기기
const messageX = document.querySelector('.title .message button');
const messagePopup = document.querySelector('.title .message');
console.log(messageX, messagePopup);
messageX.addEventListener('click',()=>{
    //messagePopup.style.display='none';
    messageX.parentElement.style.display='none';
})

//로그인 탭&내용 JS
//0. 초기세팅 'ID로그인 제목 활성화 디자인', 일회용&QR내용 숨기기, ID로그인 내용 보이기

const loginTitle = document.querySelectorAll('.title h2');
const loginContent = document.querySelectorAll('.login_box');
console.log(loginTitle,loginContent)
//0-1. 제목 활성화(ID) / 비활성화(일회용,QR) == active클래스 활성기준
loginTitle[0].classList.add('active');
loginTitle[1].classList.remove('active');
loginTitle[2].classList.remove('active');
//0-2 내용
loginContent[0].style.display='block';
loginContent[1].style.display='none';
loginContent[2].style.display='none';
//1. 일회용 번호 제목 클릭
//2. 모든 내용 숨기기
//3. 일회용 번호 내용 보이기


loginTitle[1].addEventListener('click',()=>{
    //모든 제목 디자인 해제하기
    loginTitle[0].classList.remove('active');
    loginTitle[1].classList.remove('active');
    loginTitle[2].classList.remove('active');
    //일회용번호 제목 활성화 디자인 적용하기
    loginTitle[1].classList.add('active');

    loginContent[0].style.display='none';
    loginContent[1].style.display='none';
    loginContent[2].style.display='none';
    loginContent[1].style.display='block';
})

//1. QR코드 번호 제목 클릭
//2. 모든 내용 숨기기
//3. 일회용 번호 내용 보이기

loginTitle[2].addEventListener('click',()=>{
        //모든 제목 디자인 해제하기
        loginTitle[0].classList.remove('active');
        loginTitle[1].classList.remove('active');
        loginTitle[2].classList.remove('active');
        //일회용번호 제목 활성화 디자인 적용하기
        loginTitle[2].classList.add('active');

    loginContent[0].style.display='none';
    loginContent[1].style.display='none';
    loginContent[2].style.display='none';
    loginContent[2].style.display='block';
})

//1. ID로그인 번호 제목 클릭
//2. 모든 내용 숨기기
//3. 일회용 번호 내용 보이기

loginTitle[0].addEventListener('click',()=>{
        //모든 제목 디자인 해제하기
        loginTitle[0].classList.remove('active');
        loginTitle[1].classList.remove('active');
        loginTitle[2].classList.remove('active');
        //일회용번호 제목 활성화 디자인 적용하기
        loginTitle[0].classList.add('active');

    loginContent[0].style.display='none';
    loginContent[1].style.display='none';
    loginContent[2].style.display='none';
    loginContent[0].style.display='block';
})