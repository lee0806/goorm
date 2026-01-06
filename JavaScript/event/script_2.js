const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title2 = document.querySelector('h3');

emailInput.value = '';

console.log("script_2");

form.addEventListener('submit', handleEvent);

// keyDown
emailInput.addEventListener('keydown', handleEvent);

// keyUp
emailInput.addEventListener('keyup', handleEvent);

// keyPress
emailInput.addEventListener('keypress', handleEvent);

// focus
emailInput.addEventListener('focus', handleEvent);

// blur (focus하고 다른 곳을 클릭했을 때)
emailInput.addEventListener('blur', handleEvent);

// cut (잘라내기 할 때)
emailInput.addEventListener('cut', handleEvent);

// paste (붙여 넣기 할 때)
emailInput.addEventListener('paste', handleEvent);

// input(input 요소 값이 바뀌었을 때)
emailInput.addEventListener('input', handleEvent);

function handleEvent(e) {
    console.log(`event type : ${e.type}`)
    if (e.type === 'submit') {
        e.preventDefault();
    }
    console.log(e.target.value);
    title2.innerText = e.target.value;
}