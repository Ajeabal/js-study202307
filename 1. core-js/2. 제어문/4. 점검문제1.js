let firstNum = +prompt("첫번째 숫자 입력");
let secondNum = +prompt("두번째 숫자 입력");
let resultNum = 0;
if (firstNum > secondNum) {
    let t = firstNum;
    firstNum = secondNum;
    secondNum = t;
}
for (let i = firstNum; i <= secondNum; i++) {
    resultNum += i;
}
alert(`${firstNum}~${secondNum}까지의 누적합 : ${resultNum}`);
