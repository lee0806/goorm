// function func() {
//     if (true) {
//         var a = 10;
//         console.log("if문 안입니다." + a);
//     }
//     console.log("if문 밖입니다." + a);
// }

// console.log("함수 밖입니다." + a); // 함수 밖이라 참조가 안됨
// func();

function func() {
    if (true) {
        let a = 10;
        console.log(a);
    }
    console.log(a); // if문 밖이므로 오류 발생
}

func();