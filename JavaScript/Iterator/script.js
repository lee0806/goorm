// const myIterator = {
//     current : 0,
//     end : 3,
//     next() {
//         if (this.current <= this.end) {
//             return { value : this.current++ };
//         }
//         return { done : true };
//     }
// }

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// function* number() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// const gen = number();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (const n of range(1, 5)) {
    console.log(n)
}