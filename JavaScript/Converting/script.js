// Number to String
let val = 111;

let val2 = String(val);



// Boolean to String

val = false;

console.log(val);

val = String(false);

console.log(val);
console.log(typeof val);

// Date to String

val = new Date();

console.log(val);

val = String(new Date());

console.log(val);

// Array to String

val = String([1, 2, 3, 4, 5]);

console.log(val);

// to String()

val = (5).toString();

console.log(val);

val = Number()

console.log(val);
console.log(typeof val);

// 소수점을 지우고 숫자로 바꿀때
val = parseInt('1114.40');

// 소수점을 포함한 Float으로 바꿀때
val = parseFloat('1140.40');

// 자동으로 값 변환

const val1 = String(2);
const val3 = 3;
const sum = val1 + val3;

console.log(sum);
console.log(typeof sum);
