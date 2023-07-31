
let x = 10; // 전역 변수 : 프로그램 내 전체에서 사용가능

function foo(z) {
    // console.log(`지역변수 x 선언전 : ${x}`);
    let x = 30;
    let y = 20 + x; // 지역 변수 : 함수 내에서만 사용가능
    console.log(y - z);    
    // x = 30;
    console.log(`지역변수 x 선언 후: ${x}`);
}

foo(17);
console.log(x);

console.log('=========================');

// 중첩 함수 : 함수 안에 함수를 또 정의한 형태
function outer(m) {
    let n = 'outer local n';
    let v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);
    
    function inner() {
        console.log(n);
        let m = 'inner local m'
        let v = 'inner local v'
        console.log(m);
        console.log(v);
    }
    inner();
}
let m = 'global m';

outer('outer param m');

console.log(m);

let k = 100;
for (let k = 0; k < 3; k++) {
    console.log(`for문 안에서의 k : ${k}`);
}
console.log(`for문 밖에서의 k : ${k}`);


