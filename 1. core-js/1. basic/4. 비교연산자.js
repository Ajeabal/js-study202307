let a = 5;
let b = '5';

console.log(a == b);
console.log(a != b);


console.log(a === b);
console.log(a !== b);

console.log("==========");
// == 연산자는 예측이 어려우니 사용 금지
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');
// 문자 대소 비교
console.log("==========");

console.log("cobra" < "zebra");
console.log("ace" < "ade");
//  한글은 유니코드(44032)부터
// 영어 대문자 < 소문자 < 한글
// 같은 문자끼리는 사전순으로 크기 결정