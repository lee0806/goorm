let foo = 42
console.log(typeof foo);
foo = 'bar';
console.log(typeof foo);
foo = true;
console.log(typeof foo);
foo = null;
console.log(typeof foo);

let anything;

console.log(typeof anything);

const sym = Symbol();

console.log(typeof sym);

const hobbies = ['a', 'b'];
console.log(typeof hobbies);