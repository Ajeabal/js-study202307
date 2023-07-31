// 1~10 사이의 랜덤 정수 생성
// Math.random 0.0 ~ 0.9 까지의 랜덤 실수 생성
// Math.random==0.33일 때 * 10을 하면 3.3이 됨
// Math.floor()안에 넣어주면 소수점 버림

// x이상 y이하의 랜덤 정수 생성 공식
// Math.floor(Math.random() * (y - x + 1)) + x

let rn = Math.floor(Math.random() * 10)+1;
console.log(rn);