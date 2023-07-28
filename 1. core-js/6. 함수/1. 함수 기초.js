/*
console.log(`김철수님 안녕하세요~~`);
console.log(`오늘도 즐거운 하루되세요~`);

console.log(`박영희님 안녕하세요~~`);
console.log(`오늘도 즐거운 하루되세요~`);

console.log(`홍길동님 안녕하세요~~`);
console.log(`오늘도 수고하셨습니다~`);
*/

// 함수 정의
function sayHello(nickName, isMorning) {
  console.log(`${nickName}님 방가방가~~`);
  if (isMorning) {
    console.log(`오늘도 즐거운 하루되세요~`);
  } else {
    console.log("오늘도 수고하셨습니다.");
  }
}

// 함수 호출
sayHello("김철수", true);
console.log("========================");
sayHello("박영희", false);
console.log("========================");
sayHello("홍길동", false);

function makeline() {
    console.log("========================");
}
for (let i = 0; i < 4; i++) {
    makeline();   
}

function calcCirclesArea(r) {
    const PI = 3.14159265358979323846
    const area = PI * r ** 2;
    return area;
}

let rs = calcCirclesArea(5)
console.log(`re: ${rs}`);

let rs2 = calcCirclesArea(15)
console.log(`re: ${rs2}`);
