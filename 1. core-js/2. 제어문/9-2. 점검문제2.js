alert("재미있는 사칙연산 게임\n[종료하려면 0을 누르세요]");
let a = 0;
let b = 0;
let i = 1;
let x;
let difficulty = +prompt("난이도 설정 1.상(1~100) 2.중(1~50) 3.하 (1~20)");
if (difficulty === 1) {
  a = 100;
  b = 100;
} else if (difficulty === 2) {
  a = 50;
  b = 50;
} else {
  a = 20;
  b = 20;
}
let cScore = 0;
let wScore = 0;
while (true) {
  let rna = Math.floor(Math.random() * a) + 1;
  let rnb = Math.floor(Math.random() * b) + 1;
  let rnX = Math.floor(Math.random() * 3) + 1;
  if (rnX === 1) {
    x = "+";
    let answer = +prompt(`Q${i}. ${rna} ${x} ${rnb} = ??`);
    let question = rna + rnb;
    if (answer === 0) {
      alert(`정답횟수: ${cScore}, 틀린횟수: ${wScore}`);
      break;
    } else if (question === answer) {
      alert("정답입니다.");
      cScore++;
    } else if (question != answer) {
      alert("틀렸어요~");
      wScore++;
    }
  } else if (rnX === 2) {
    x = "-";
    let answer = +prompt(`Q${i}. ${rna} ${x} ${rnb} = ??`);
    let question = rna - rnb;
    if (answer === 0) {
      alert(`정답횟수: ${cScore}, 틀린횟수: ${wScore}`);
      break;
    } else if (question === answer) {
      alert("정답입니다.");
      cScore++;
    } else if (question != answer) {
      alert("틀렸어요~");
      wScore++;
    }
  } else if (rnX === 3) {
    x = "*";
    let answer = +prompt(`Q${i}. ${rna} ${x} ${rnb} = ??`);
    let question = rna * rnb;
    if (answer === 0) {
      alert(`정답횟수: ${cScore}, 틀린횟수: ${wScore}`);
      break;
    } else if (question === answer) {
      alert("정답입니다.");
      cScore++;
    } else if (question != answer) {
      alert("틀렸어요~");
      wScore++;
    }
  }
  i++
}
