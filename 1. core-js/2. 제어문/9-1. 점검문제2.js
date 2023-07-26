// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며
// 난이도별 입력 횟수제한이 다르다.

let rn = Math.floor(Math.random() * 100) + 1;
let life = 0;
let min = 1, max = 100;
let difficulty = +prompt(
  "난이도 설정 1.상(기회 3번) 2.중(기회 6번) 3.하 (기회 10번)"
);
if (difficulty === 1) {
  life = 3;
} else if (difficulty === 2) {
  life = 6;
} else {
  life = 10;
}
alert(`1~100 사이의 무작위 숫자를 ${life}번 안에 맞춰보세요!`);
while (true) {
  let answer = +prompt(`숫자를 입력해주세요[${min} ~ ${max}]`);
  if (answer < max+1 && answer > min-1){
    if (life === 0) {
      alert("기회를 모두 소진하셨습니다. GAME OVER!");
      break;
    } else {
      if (answer === rn) {
        alert(`${life}번의 기회를 남기고 성공하셨습니다 축하드립니다!`);
        break;
      } else if (answer > rn) {  
        alert(`DOWN! 기회가 ${life}번 남았습니다 `);
        max = answer - 1;
        life--;
      } else if (answer < rn) {
        alert(`UP! 기회가 ${life}번 남았습니다 `);
        min = answer + 1;
        life--;
      }
    }
  }
  else {
    alert(`숫자는 ${min} ~ ${max} 사이에 숫자를 입력해야합니다.`)
  }
}
