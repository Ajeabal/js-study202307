// 단축평가
/*
    t && t -> t
    t && f -> f
    f && t -> f
    f && f -> f

    t || t -> t
    t || f -> t
    f || t -> t
    f || f -> f
*/

// OR 연산 : 첫번째 truthy를 반환
console.log('hello' || 'world');
console.log(0 || '안녕');

// AND 연산 : 첫번쨰 falsy를 반환
console.log('hello' && 'world');
console.log(null && 'world');

/*
    <h1>웰컴</h1>
    isLogin && <h2>xxx님 환영</h2>
*/