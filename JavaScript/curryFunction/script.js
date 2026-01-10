// function log(date, importance, message) {
//     console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
// }

// function curry(f) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return f(a, b, c);
//             }
//         }
//     }
// }

// const curriedLog = curry(log);
// let logNow = curriedLog(new Date());

// logNow("info")("message");

const sum = (x, y, z, j) => x + y + z + j;

function curry(fn) { // 함수를 받고
    return function curried(...args) { // 인자를 받는다
        if (args.length >= fn.length) { // 받은 인자값이 충분하면
            return fn.apply(this, args); // 받은 인자 값으로 fn 실행
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
};

const curried = curry(sum);
console.log(curried(1)(2)(3)(4));

