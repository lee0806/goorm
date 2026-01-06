window.onload = function() {
    let text = this.document.getElementById("text");

    text.innerHTML = 'HTML 문서 loaded';
    
}

const aElement = document.querySelector('a');

aElement.addEventListener('click', () => {
    alert('a element clicked');
})

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', handleClick);

function handleClick(event) {
    let val;
    val = event;
    console.log("이벤트 객체");
    console.log(val);
    
    // event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    // event type
    val = event.type;

    // 윈도우로부터의 거리 좌표
    val = event.clientY;
    val = event.clientX;

    // 요소로부터의 거리 좌표
    val = event.offsetY;
    val = event.offsetX;
}