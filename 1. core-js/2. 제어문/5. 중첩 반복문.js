let cnt = 0

for (let i = 0; i < 3; i++) {
    for (let j = 0;  j < 2;  j++) {
        for (let k = 0; k < 4; k++) {
            cnt++
        }
    }    
}
console.log(`총 반복 횟수 ${cnt}회`);

// 구구단 출력
// for (let level = 2; level <= 9; level++) {
//   console.log(`======구구단 ${level}단======`);
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${level} x ${i} = ${level * i}`);
//   }
//   console.log("=====================");
// }
