const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('form');
const title = document.querySelector('h2');

// Click : 클릭할 때
submitBtn.addEventListener('click', handleEvent);

// doubleClick : 더블 클릭할 때
submitBtn.addEventListener('dblclick', handleEvent);

// mouseDown : 버튼을 누를 때
submitBtn.addEventListener('mousedown', handleEvent);

// mouseUp : 버튼을 땔 때
submitBtn.addEventListener('mouseup', handleEvent);

// mouseEnter : 마우스가 들어갈 때
submitBtn.addEventListener('mouseenter', handleEvent);

// mouseLeave : 마우스가 떠날 때
submitBtn.addEventListener('mouseleave', handleEvent);

// mouseMove : 마우스를 움직일 때
container.addEventListener('mousemove', handleEvent);

function handleEvent(e) {
    e.preventDefault();
    console.log(`event type : ${e.type}`);

    title.textContent = `MouseX : ${e.offsetX}, MouseY : ${e.offsetY}`;
    
}

