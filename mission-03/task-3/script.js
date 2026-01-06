let array = [1,2,3,4,5,6,7,8,9];
let array_2 = [100, 299, 300, 1, 3, 5, 6, 50, 40, 20];

console.log(array);
console.log("===================")

console.log(array_2);
console.log("===================")

console.log("for문 사용")
console.log("===================")

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}
console.log("===================")
console.log("for of 문 사용 및 50 미만 숫자 출력")
console.log("===================")

for (let k of array_2) {
    if (k < 50) {
        console.log(k);
    }
}