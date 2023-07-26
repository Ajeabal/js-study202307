
let foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

let findTarget = '볶음밥';

// let index = -1;
// for (let i = 0; i < foodList.length; i++) {
//     if (findTarget === foodList[i]) {
//         index = i;
//         break;
//     }
// }

// indexOf : 배열의 특정 요소과 몇번 인덱스에 있는지 탐색
let index = foodList.indexOf(findTarget);

console.log(`찾은 인덱스: ${index}`);

//includes() : 배열의 특정 요소가 존재하는지 논리여부를 확인
let isPresent  = foodList.includes('볶음밥');
console.log(`존재 여부: ${isPresent}`);

//slice() : 배열을 일정부분 잘라내어, 복사본 배열을 반환
console.log('========================');

foodList.push('오뎅', '국밥');
console.log(foodList);

let slicedFoodList = foodList.slice(0, 3);
console.log(slicedFoodList);

let sliced2 = foodList.slice(3);
console.log(sliced2);

// 원본 다 복사
let copyAll = foodList.slice();
console.log(copyAll);

// reverse(): 배열 역순 정렬
console.log('=========================');
let arr1 = [10, 20, 30];
let arr2 = [9, 7, 5, 3, 1];
let a = arr1.slice();
a.reverse();
console.log(arr1);
console.log(a);

//  concat(): 배열을 2개를 결합, 결합한 사본을 리턴
console.log("========================");
let concated = arr1.concat(arr2);
console.log(concated);

// splice(): 배열의 특정 요소를 제거하거나 삽입 <- 원본을 건들임
console.log('=============================');
console.log(foodList);
// foodList.splice(1, 2);
// console.log(foodList);
foodList.splice(0, 1, '보쌈');
console.log(foodList);
foodList.splice(1, 0, '마라탕');
console.log(foodList);

// clear() : 배열 전체 삭제
foodList = [];
console.log(foodList);