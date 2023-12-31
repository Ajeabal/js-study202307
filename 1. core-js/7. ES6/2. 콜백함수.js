
function cal(func) {
    console.log('계산기');
    const result = func(10, 20);
    return result;
}

function add(n1, n2) {
    return n1 + n2;
}

const r1 = cal(add);
console.log(r1);

const r2 = cal(function(n1, n2) {
    return n1 - n2
});

console.log(r2);

const r3 = cal((n1, n2)=>n1*n2);
console.log(r3);

console.log('==============');

// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력하는 함수.
function showEvenNumber(n) {
    for (let i = 1; i<= n; i++) {
        if (i % 2 === 0) console.log(i);
    }    
}

function showOddNumber(n, isOdd) {
    const delim = isOdd ? 1 : 0;
    for (let i = 1; i<= n; i++) {
        if (i % 2 === delim) console.log(i);
    }    
}
// 콜백을 적용한 솔루션
function  showNumber(n, code) {
    for (let i = 1; i<= n; i++) {
        if (code(i)) console.log(i);
    }    
}
showNumber(10, i => i % 2 === 0);
