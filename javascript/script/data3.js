//객체공부
//변수생성키워드(var, let, const) 변수명 = {속성:값, 속성:'값', 속성:값};
//변수명은 객체명으로도 부를 수 있다.
//값이 문자인 경우 따옴표를 묶고 숫자 또는 다른 데이터타입(null)인 경우 값만 작성한다.
//객체값(속성:값에서 값)을 호출할 때는 변수명.속성을 작성한다.
//객체 선언 시 속성명은 대입하는 값과 동일한 뜻을 가지는 속성으로 의미있게 지정한다.
let cat1 = {
    age:1,
    name:'나비',
    color:'검정',
    charact:'착하고 애교 많음'
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.color);
console.log(cat1.name);
console.log(cat1.charact);
//나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color}고양이고 ${cat1.age}이에요.`);
//변수명은 항상 다르게 선언해야 하지만 대입되는 객체 속성은 중복이 가능하다.
let cat2 = {
    color:['검정','흰색','노랑'], //2개 이상 값 설정 시 값으로 배열 활용
    age:2,
    name:'삼색이'
};
console.log(cat2);
console.log(cat2.color[0], cat2.color[1], cat2.color[2]);
console.log(cat2.color.length); //객체.속성.속성; 
//속성이나 메서드 선언 시 반드시 앞에선 객체를 먼저 선언한다.
//객체 뒤 속성이 배열인 경우는 배열의 속성(length)를 연결해서 작성할 수 있다.
//맨 앞에 객체가 선언됐다면 필요한 경우 속성.속성.속성을 속성끼리 연결할 수 있다.
//객체 선언 : 고양이 종은 코리안 숏헤어, 털은 흰색과 검은색, 나이는 1살, 성별은 암컷, 입양 전, 중성화 전, 건강상태 양호에 대한 정보로 객체 생성하기
let cat3 = {
    type:'코리안 숏헤어',
    color:['흰색','검은색'],
    age:1,
    gender:'암컷',
    adoptionStatus:'전', /* 입양상태 */
    neutralizationStatus:'전', /* 중성화상태 */
    health:'양호'
};
console.log(cat3);
console.log(cat3.genter);
console.log(cat3.age, cat3.color[0]);
console.log(cat1.color.length);
