const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const goals = document.querySelector('#btn');
const result = document.querySelector('.result_txt');

goals.addEventListener('click',()=>{
    let normal_w = ((Number(userHeight.value) - 100)) * 0.9;
    result.innerHTML=`적정체중은 ${normal_w}kg이며<br>${userWeight.value-normal_w}kg 초과되셨습니다.`});