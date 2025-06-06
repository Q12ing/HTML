/* window.document.body.style = 'background-color:aqua'; */
document.write('250107'); //window 생략(기본 내장됨)
//DOM
//객체는 변수에 선언해야 한다.
//변수생성키워드 생성변수명 = 변수에대입되는값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식된다.
//배열 인식 결과 -> 각 데이터가 [0] [1] 인덱스로 구분되고 length속성이 자동추가된다.
const title1 = document.getElementsByTagName('h1');
const title2 = document.getElementsByTagName('h2');
console.log(title1);
console.log(title2);
//DOM객체.속성        //기존속성읽기
//DOM객체.속성 = '값' //속성에 새로운 값 대입하기
title1[0].style = 'color:red';
title1[1].style = 'background-color:yellow';
title2[0].style = 'border:1px solid red';
title2[1].style = 'text-decoration:underline';
title2[2].style = 'color:blue';
const listWrap = document.getElementsByTagName('ul')[0]; //복수형일시 뒤에 인덱스 넘버를 붙여서 변수로 골라 만들 수 있다.
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:red'; // listWrap[0] O
/* listWrap[0].style = 'background-color:aqua'; // listWrap[0] [0] X */
list[0].style = 'background-color:yellow';
const alistWrap = document.getElementsByTagName('ul')[1];
const alist = alistWrap.getElementsByTagName('li');
const aTag1 = alist[0].getElementsByTagName('a');
const aTag2 = alist[1].getElementsByTagName('a');
const aTagAll = alistWrap.getElementsByTagName('a');
console.log(alistWrap);
console.log(alist);
console.log(aTag1, aTag2);
console.log(aTagAll);
/* 
HTML, CSS작성 시 HTML의 가족관계를 우선시 하여 li가 형제, a는 각 외동으로 각각인식하지만 JS는 최종 선택 대상 앞 'document'자리에 누굴 쓰느냐에 따라 안에 있는 태그 전체를 순서대로 인식한다.때문에 실제 HTML관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식하여 인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나씩 배치되어 있으므로 각 a를 0번째로 인식하게 된다.
  */
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style = 'background-color:lime';
/*  */
const menu = document.getElementsByClassName('menu')[0];
const menuLi = menu.getElementsByTagName('li');
const menuA = menu.getElementsByTagName('a');
console.log(menu);
console.log(menuLi);
menu.style = 'background-color:yellow';
console.log(menuA);
menuLi[1].style = 'background-color:red';
menuA[0].style = 'background-color:pink';
const notice = document.getElementById('notice');
console.log(notice);
notice.style='color:red';
const container = document.getElementById('container');
const title = document.getElementById('title');
const content = document.getElementById('content');
const titleA = title.getElementsByTagName('a');
const contentA = content.getElementsByTagName('a');
console.log(container);
console.log(title);
console.log(content);
titleA[0].style = 'background-color:red';
contentA[0].style = 'background-color:blue';
console.log('=========================');
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi = gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
nav.style = 'background-color:lime';