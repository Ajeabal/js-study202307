// parameter
// 함수를 정의할 때 함수 바깥쪽에서 안쪽으로 들어오는
// 데이터를 저장하는 변수

// x ~ y까지의 누적합을 구하는 함수 정의
/* 
    parameter:
        - begin: 누적합을 구할 시작값
        - end: 누적합을 구할 끝값
    returnl: begin과 end사이의 정수의 총합
    ex:
        calcRangeSum(1, 10) => 55 return
*/
function calcRangeSum(begin, end) {
  console.log(`begin: ${begin}, end: ${end}`);
  let total = 0;
  for (let i = begin; i <= end; i++) {
    total += i;
  }
  return total;
}

let a1 = calcRangeSum(1, 100);
console.log(`a1: ${a1}`);

let a2 = calcRangeSum();
console.log(`a2: ${a2}`);

function sayHello(la23ng) {
  // 고전
  // lang = lang || "한국어";

  if (lang === "한국어") {
    console.log("안녕세요");
  } else if (lang === "영어") {
    console.log("hi");
  }
}

sayHello();
