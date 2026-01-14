// function findCurrent(limit, list) {
//     let acc = 0;
//     let arr = list.map(x => x * x).filter(x => x % 2);
//     console.log(arr);
//     for (let i = 0; i < limit; i++) {
//         acc += arr[i];
//     }
//     console.log(acc);
// }

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// findCurrent(3, list);

function findCurrent(limit, list) {
    let arr = list.filter(x => x % 2).map(x => x * x).slice(0, limit);
    let acc = arr.reduce((sum, v) => sum + v, 0);
    console.log(acc);
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findCurrent(3, list);

