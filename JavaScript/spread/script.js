const user = { name : '김똘똘' };
const user2 = user;

console.log(user === user2);

user2.name = '김뚤뚤';

console.log(user);
console.log(user2);
console.log(user===user2);
