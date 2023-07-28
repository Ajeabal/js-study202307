/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
let userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};
//회원객체(userInfo)안에 있는 회원배열(userInfo.userList)

let users = userInfo.userList;

while (true) {
  // 사용자에게 계정명을 입력 받기
  let inputAccount = prompt("아이디 입력.");

  // 회원배열을 반복해서 입력한 계정명과 일치하는 회원이 있는지 확인
  let foundedUser = null;
  for (let user of users) {
    if (inputAccount === user.account) {
      // console.log('발견');
      foundedUser = user;
      console.log(user);
      break;
    }
  }
  if (foundedUser === null) {
    alert("가입된 유저가 아님!");
    continue;
  }
  //패스워드 검사
  //사용자에게 입력받은 패스워드
  let inputPassword = prompt("비밀번호 입력.");
  if (inputPassword === foundedUser.password) {
    alert(`${foundedUser.username}님 환영합니다.`);
    break;
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}

// let searchID = [];
// let searchPW = [];
// let flag;
// let accountCheck;
// let passwordCheck;

// while (true) {
//   let inputAccount = prompt("계정을 입력해주세요");
//   for (i in userInfo.userList) {
//     searchID.push(`${userInfo.userList[i].account}`);
//   }
//   accountCheck = searchID.includes(inputAccount);
//   if (accountCheck) {
//     let inputPassword = prompt("비밀번호를 입력해주세요");
//     for (i in userInfo.userList) {
//       searchPW.push(`${userInfo.userList[i].password}`);
//     }
//     passwordCheck = searchPW.includes(inputPassword);
//     if (passwordCheck){
//         break;
//     }
//     else{
//         alert("비밀번호가 틀렸습니다.");
//     }
//   } else {
//     alert("존재하지 않는 회원입니다");
//   }
// }
