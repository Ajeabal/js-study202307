//언제 끝날지 몰라서 쓰는 무한루프
//그냥 무한루프는 악성코드

// for (let i = 0; ; i++) {
//     if (i > 100) break;
//     console.log("Hello" + i);
// }

let i = 0;
while(true) {
    if (i > 100) break;
    console.log("Hello" + i);
    i++;
}