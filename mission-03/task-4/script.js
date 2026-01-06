let array = [1,2,3,4,5,6,7,8,9,10];

array.push(100);
array.push(200);
array.push(300);

console.log("push, 100 200 300 추가")
console.log(array);
console.log("=================")

array.pop(10);
array.pop(10);
array.pop(10);

console.log("pop, 100 200 300 제거")
console.log(array)
console.log("=================")

console.log("0부터 5번째 전까지")
console.log(array.slice(0, 5));
console.log("=================")

let str = "aBcDeFg";

console.log("대문자로 변경");
console.log(str.toUpperCase());
console.log("=================")
console.log("기존 문자");
console.log(str);
console.log("=================")

console.log("0부터 3번째 전까지")
console.log(str.substring(0, 3));
console.log("=================")


