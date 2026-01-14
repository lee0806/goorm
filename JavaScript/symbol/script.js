// 같은 설명이 들어가도
// 고유한 값임을 알 수 있음
const a = Symbol('id');
const b = Symbol('id');

console.log(a === b);


// // 객체 키의 경우 덮어쓰기가 됨
// const user = {

// };

// user.id = 1;
// user.id = 2;

// console.log(user.id);

const ID = Symbol('id');

const user = {
    name : '김똘똘',
    [ID] : 123
};

Object.freeze(user);

user[ID] = 456;
user[ID] = 234;

console.log(user[ID]);