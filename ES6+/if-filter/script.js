// function f1(limit, list) {
//     let acc = 0; // 결과값 초기화
//     for (const a of list) { // 리스트를 순회하면서
//         if (a % 2) { // 2로 나눈 값이 0이 아니면
//             const b = a * a; // 제곱 값을 넣고
//             acc += b; // 결과값에 더함
//             if (--limit == 0) break; // limit이 0이되면 순회 중단
//         }
//     }
//     console.log(acc); // 결과값 출력
// }

// f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f2(limit, list) {
    let acc = 0;
    for (const a of L.filter(a => a % 2, list)) { // 이터레이터의 형태, list의 값을 홀 수 값만 filter를 진행
        const b = a * a;
        acc += b;
        if (--limit == 0) break;
    }
    console.log(acc);
}
