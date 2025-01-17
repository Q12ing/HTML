const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
];

console.log(birthday_flower[0].month);
//월 칸에 숫자를 적고
//확인 버튼을 누르면
//그에 맞는 결과 값을 하단에 도출
const year=document.querySelector('#year');
const day=document.querySelector('#day');
const mon=document.querySelector('#month');
const btn=document.querySelector('#flower_btn');
const result=document.querySelector('#result');
console.log(mon,btn,result);

function flower (num){
    if (year.value === '' || mon.value === '' || day.value === '') {result.textContent = '생년월일을 모두 입력해주세요.';}
    else if (num < 1 || num > 12) {result.textContent = '1월부터 12월 사이의 숫자를 입력해주세요.';}
    else {//결과출력
        let index = num-1;
        let txt = `${birthday_flower[index].month}월의 탄생화는 ${birthday_flower[index].flower}이고,<br>꽃말은 ${birthday_flower[index].content}입니다.`;
        result.innerHTML = txt;
    }
}
btn.addEventListener('click',()=>{
    flower(Number(mon.value));
})