// multi parameter: 매개변수의 갯수가 n개 일 경우.
// n개를 하나의 박스(배열, 객체)에 담아서 전달하자.

// 정수 n개의 총합 (ES5)
function addAll(numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n
    }
    return total;
}

let r1 = addAll([10, 20, 30]);
console.log(r1);

// 정수 n개의 총합 (ES6) - 스프레드
function addAllEs6(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n
    }
    return total;
}


let r2 = addAllEs6(10, 20, 30, 20, 30);
console.log(r2);


// 다중 반환값
// 함수의 반환값은 언제나 하나여야 한다.
// 2개의 정수를 전달하면 두 수의 덧셈, 뺄셈, 곱셈, 나눗셈을 반환 받고 싶다.

function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2,
    };
}

let results = operateAll(20, 10);

console.log(results);
console.log(results.plus);

// console.log(results[0]);
// console.log(operateAll(4, 5)[2]);
