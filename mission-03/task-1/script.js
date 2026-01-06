const buttonEvent = document.querySelector('.dark-mode-button');
const backgroundColorEvent = document.querySelector('body');
const headerColorEvent = document.querySelector('header');

let modeChange = 0;

buttonEvent.addEventListener('click', eventColor);

function eventColor() {

    if (modeChange == 0) {
        // 배경색
        backgroundColorEvent.style.background = 'rgba(54, 54, 54, 1)';
        // 헤더 배경색
        headerColorEvent.style.background = 'rgba(54, 54, 54, 1)';
        // 글자 색 변경
        backgroundColorEvent.style.color = 'rgb(255, 255, 255)';
        // 헤더 글자 색 변경
        headerColorEvent.style.color = 'rgb(255, 255, 255)';
        // 변환 애니메이션
        backgroundColorEvent.style.transition = 'all 0.5s'
        // 헤더 변환 애니메이션
        headerColorEvent.style.transition = 'all 0.5s'
        // 트리거
        modeChange = 1;
        
        console.log(backgroundColorEvent.style.background);
        console.log(headerColorEvent.style.color);

    } else {
        // 배경색
        backgroundColorEvent.style.background = 'rgb(255, 255, 255)';
        // 헤더 배경색
        headerColorEvent.style.background = 'rgb(255, 255, 255)';
        // 글자 색 변경
        backgroundColorEvent.style.color = 'rgba(54, 54, 54, 1)';
        // 헤더 글자 색 변경
        headerColorEvent.style.color = 'rgba(54, 54, 54, 1)';
        // 변환 애니메이션
        backgroundColorEvent.style.transition = 'all 0.5s';
        // 헤더 변환 애니메이션
        headerColorEvent.style.transition = 'all 0.5s';
        // 트리거
        modeChange = 0;

        console.log(backgroundColorEvent.style.background);
        console.log(headerColorEvent.style.color);
    }
    
}