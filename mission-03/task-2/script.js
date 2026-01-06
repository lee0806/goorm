const nameEvent = document.getElementById('name'); // 이름에 대한 id 찾기
const containerEvent = document.querySelector('.container'); // 전체 컨테이너 찾기
const ageEvent = document.getElementById('age'); // 나이에 대한 id 찾기
const buttonEvent = document.querySelector('button'); // 버튼 찾기

const div = document.createElement('div'); // div 생성
div.className = "item"; // div의 class이름을 item
div.id = "new-item"; // id를 new-item으로 지정

let nameArray = []; // 이름을 넣을 array 생성
let ageArray = []; // 나이를 넣을 array 생성

buttonEvent.addEventListener('click', showFunction); // 이벤트리스너 생성

function showFunction() { // 이벤트 리스너 동작 함수
    if (nameEvent.value != '' && ageEvent.value != '') { // 이름과 나이의 값이 빈값일 경우 실행하지 않음
        let ageNumber = Number(ageEvent.value);  // 나이값을 숫자로 변환
        if (Number.isNaN(ageNumber)) { // 이때 숫자가 아닐 경우
            window.alert("숫자를 안넣었어요"); // 숫자가 아니라고 alert으로 알리고
            return; // 리턴
        }
        nameArray.push(nameEvent.value); // 이름을 배열에 저장
        ageArray.push(ageNumber); // 나이를 배열에 저장
        console.log(nameArray); // console 출력
        console.log(ageArray); // console 출력

        let sum = 0; // 나이 평균 계산 변수 생성
        for (let i = 0; i < ageArray.length; i++) { // 배열을 돌면서
            sum += Number(ageArray[i]); // 나이를 모두 더함
        }
        sum /= ageArray.length; // 길이만큼 나눠 평균 계산
        div.textContent ="평균 값 : " + sum; // 평균값 출력
        containerEvent.appendChild(div); // 컨테이너에 div 추가
        console.log(div); // div값 console에 출력
        console.log(nameArray); // 이름 배열 console에 출력
        console.log(ageArray); // 나이 배열 console에 출력

    } else {
        window.alert("값을 안넣었어요."); // 이름, 나이 중 값을 넣지 않았을 때 alert 생성
    }
    

}