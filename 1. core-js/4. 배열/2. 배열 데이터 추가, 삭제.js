
let pets = ["개", "고양이", "거북이"];

console.log(pets);

// 배열의 끝에 데이터 추가
pets.push("게코");
pets.push("북극여우", "보아뱀", "사막여우");

console.log(pets);

let r1 = pets.pop();
pets.pop();
let r3 = pets.pop();
console.log(`r1: ${r1}`);
console.log(`r3: ${r3}`);

// 배열의 맴 첫 위치에 데이터를 추가
pets.unshift("비둘기");
console.log(pets);

pets.shift("비둘기");
console.log(pets);
