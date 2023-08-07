
// 일반 함수에서 this
function foo() {
    // node.js에서는 global 할당
    // 브라우저 환경에서는 window 할당
    console.log(this);
}
// foo();

// 객체에서의 this
const car = {
    madeBy: '현',
    model: '그',
    showCarInfo: function () {
        console.log(this);
        console.log(`제조: ${this.madeBy}, 모델:${this.model}`);        
    }
};

car.showCarInfo();

// 이벤트 핸들러의 this : function으로 선언할 경우 이벤트를 건 요소.
// const $btn = document.getElementById('btn');

// const buttonHandler = function () {
//     console.log(this);    
//     this.style.background = 'red';
// };
// $btn.addEventListener('click', buttonHandler);

// this를 조작하는 매서드 bind, call, apply

// call
function sayHello(lang1, lang2) {
    console.log(`Hello, I am ${this.name}, I can speak ${lang1} and ${lang2}`);
}
const kim = {
    name: '김철수',
    age: 33
};
const park = {
    name: '박영희',
    age: 55
}

// this를 조작하는 매서드 call
// param1: 조작할 this를 전달
// ..param2: 원래 함수가 받아야할 파라미터 전달
// sayHello.call(kim, 'ENG', "JP");

// this를 조작하는 매서드 apply
// call이랑 같지만 param2를 배열에 묶어서 줘야함
// sayHello.apply(kim, ['ENG', 'JP']);

// this를 조작하는 매서드 bind
// call이랑 apply는 함수를 바로 실행시키지만
// bind는 this를 조작하는 새로운 함수를 반환하고 실행은 하지 않음.
const bindedSayHello = sayHello.bind(kim, 'korean', 'japanese');
bindedSayHello();


// 예
const eventHandler = function (fruit, e) {
    console.log('event 객체:', e);
    console.log('과일명:', fruit);
    // console.log(this);
};
const $input = document.querySelector('input');

// document.getElementById('btn').addEventListener('click', eventHandler.bind($input));
document.getElementById('btn').addEventListener('click', eventHandler.bind(null, '사과'));