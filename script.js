// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evalute = document.querySelector('#evaluate');

// Display
let realTimeScreenValue = []
let firstValue = []
let secondValue = []

// to Clear
clearbtn.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = "darkgray";
})

// get clicked value and display
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
                if (btn.classList.contains('num_btn')) {
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
                };
        };
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
//unexpected end of input error at col 63 below
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        };
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        };
// unexpected end of input error at col 45 below
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        };
    });
});

// TODO: find way to clear realTimeScreenValue array for new equation, but still display evaluated result