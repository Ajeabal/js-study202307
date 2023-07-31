
const emp = {
    empName: '뽀로로',
    age: 4,
    hireDate: '2021-01-01',
    birthDay: '2020-01-01'
};

const {empName, age, birthDay} = emp;

console.log(`내 이름은 ${empName}이고, 나이는 ${age}살 생일은 ${birthDay} 입니다`);

const {empName: en, age: a, birthDay: bd} = emp;

console.log(`내 이름은 ${en}이고, 나이는 ${a}살 생일은 ${bd} 입니다`);

console.log('====================others에 나머지====================');
const {birthDay: bDay, ...others} = emp;
console.log(others);

console.log('======================객체 복사========================');
const copyEmp = { ...emp,
    address: '청양',
    hobbies: ['산책', '수영'],
    age: 17,
};
console.log(emp);
copyEmp.empName = '잔망루피';
console.log(copyEmp);
