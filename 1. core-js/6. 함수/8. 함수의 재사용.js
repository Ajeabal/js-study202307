// 배열에서 특정 요소가 어디 인덱스에 있는지 확인.
let foods = ['짬뽕','초밥','김치찌게','족발'];

function myIndexOf(array, searchElement) {
    for(let i = 0; i < array.length; i++) {
        if(searchElement === array[i]) return i;
    }
    return -1;
}

// 배열에서 특정 요소가 존재하는지 여부
function myIncludes(array, searchElement) {
    // let includes = array.includes(searchElement);
    // return includes;
    return myIndexOf(array, searchElement) !== -1;
}

let index = myIndexOf(foods, '파스타');
console.log(index);

let isPresent = myIncludes(foods, '김치찌게');
console.log(isPresent);