//자바스크립트 동적기능에 의해서 요소가 생성될 경우 createElement();
const new_child = document.createElement('div'); //태그명만 작성
const new_p = document.createElement('p');
const parent = document.querySelector('#parent');
const childNode = document.querySelectorAll('.child');
const li = document.querySelectorAll('.list li');
const addBtn = document.querySelector('#add');
const onoffBtn = document.querySelector('#onoff');
const reBtn = document.querySelector('#re');

console.log(new_child, parent, new_p, childNode);
console.log(parent.firstElementChild);
console.log(parent.children[2].previousElementSibling);
console.log(li);
console.log(addBtn, onoffBtn);

//기준이 되는 부모변수.appendChild(마지막자식위치에 추가하고 싶은 노드변수);
new_child.innerText = '새로운 요소';
new_p.innerHTML = '<em>새로운 요소2</em>';
parent.appendChild(new_child);
document.body.appendChild(new_p);
parent.firstElementChild.appendChild(new_p);
parent.children[2].previousElementSibling.appendChild(new_child);
//기준부모변수.insertBefore(추가요소, 기준요소);
parent.insertBefore(new_p, childNode[2]);
//1. 삭제대상변수.remove()
//숨기는 개념(style.display='none')이 아닌 요소 삭제('',remove) 개념! 쇼핑몰 장바구니 삭제 등으로 이용
//childNode[0].remove();
//2. 숨기는 대상의 부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[0]);
//style 속성을 이용한 CSS (최종 적용 속성이 1~2 소수일 경우)
li[0].style.backgroundColor ='aqua';
li[0].style.fontSize = '2rem';
//동시에 적용해야하는 CSS속성이 3개 이상 많은 경우 class를 이용한다.
//처음부터 적용된 클래스가 아닌 JS 동적 결과에 의해 나중에 적용되는 디자인에 이용
//li[1].className = 'set1';
//li[1].classList = 'set1 set2';
li[1].classlist = 'set1';
//버튼으로 제어하는 classList
addBtn.addEventListener('click',()=>{
    li[6].classList.add('set1');
});
onoffBtn.addEventListener('click',()=>{
    li[7].classList.toggle('set2');
})
reBtn.addEventListener('click',()=>{
    li[8].classList.replace('set2', 'set1'); //기존 set2를 set1로 변경
})

//li[1].classlist += ' set2'; //중간에 띄어쓰기를 안하면 클래스를 하나로 인식해버린다.
//li[2].classList.add('set1', 'set2'); //add가 메소드라서 중간에 따옴표 넣어야 함.
//li[1].classList.remove('set1');