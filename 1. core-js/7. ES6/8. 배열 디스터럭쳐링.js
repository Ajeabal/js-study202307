
const userNames = ['김철수', '강감찬', '박영희'];

// userNames에서 각각의 요소들을 다시 변수로 저장시키고 싶다.
// const kim =userNames[0];
// const kang =userNames[1];
// const park =userNames[2];

const [a, b, c] = userNames;

console.log(`a:${a}, b:${b}, c:${c}`);

const [kk, ,gg] = userNames;
console.log(`${kk}, ${gg}`);

let first = 10;
let second = 20;

[second, first] = [first, second];
console.log(`1st:${first}, 2nd: ${second}`);

const [one, three, ...rest] = [1, 3, 5, 7, 9, 11];

console.log(`one: ${one}, three: ${three}`);
console.log(rest);


// 스프레드를 홯용한 배열 간편 복사.
const foods = ['감자튀김', '햄버거', '콜라'];
//const copyFoods = foods; // 배열 복사가 아니라 배열 포인터 복사.
// const copyFoods = foods.slice();
// copyFoods = foods.map(f => f);

const copyFoods = [...foods];


foods[1] = '치킨버거';
copyFoods[2] = '사이다'

console.log(`foods: ${foods}`);
console.log(`copyFoods: ${copyFoods}`);


