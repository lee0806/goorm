const second = document.getElementById('seconds'); // 초에 대한 id를 찾음
const ten = document.getElementById('tens'); // 밀리 초에 대한 id를 찾음
const startButton = document.getElementById('button-start'); // start 버튼을 찾음
const stopButton = document.getElementById('button-stop'); // stop 버튼을 찾음
const resetButton = document.getElementById('button-reset'); // reset 버튼을 찾음

let timeSecond = 0; // 초에 대한 시간 초기화
let timeTen = 0; // 밀리 초에 대한 시간 초기화
let Interval; // setInterval이 반환한 id

startButton.onclick = function () { // start 버튼이 눌렸을 때
    clearInterval(Interval); // interval을 초기화
    Interval = setInterval(startTimer, 10); // 인터벌에 10ms마다 startTimer가 실행되도록 진행
}

stopButton.onclick = function () { // stop 버튼이 눌렸을 때
    clearInterval(Interval); // interval을 초기화
}

resetButton.onclick = function () { // reset 버튼이 눌렸을 때
    clearInterval(Interval); // interval을 초기화
    timeSecond = 0; // 초를 0으로
    timeTen = 0; // 밀리 초를 0으로
    second.innerHTML = timeSecond; // 0으로 바꾼 초를 innerHTML로 삽입
    ten.innerHTML = timeTen; // 0으로 바꾼 밀리 초를 innerHTML로 삽입
}

function startTimer() { // startTimer의 대한 함수
    timeTen++; // 밀리 초를 10ms마다 1씩 올림

    ten.innerHTML = timeTen; // innerHTML을 통해 1씩 올라간 값을 매번 삽입

    if (timeTen > 99) { // 99 초과, 즉 100이 되었을 때
        console.log('seconds'); // console.log에 찍히고

        timeSecond++; // 초를 1 올리고
        second.innerHTML = timeSecond; // innerHTML로 삽입
        timeTen = 0; // 이후 밀리초를 0으로
        ten.innerHTML = 0; // innerHTML을 통해 웹에서도 0으로
    }
}


