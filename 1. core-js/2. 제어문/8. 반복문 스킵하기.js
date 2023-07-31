
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }
// console.log("반복문 종료");

while (true) {
    let n = +prompt("숫자를 입력");

    if (n === 0) break;
    else if (n === 1) continue;

    alert("끝나지 않음.");

}
alert("끝.")