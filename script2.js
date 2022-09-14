// Variables
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keypad-btns');
const buttons = calculator.querySelectorAll('button');
let currentInput = calculator.querySelector('#currentInput');

/* Key click listener
keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action

    if (e.target.matches('button')) {
        console.log('clicked')
        const key = e.target
        const action = key.dataset.action
    }

    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        console.log(action)
    }

    if ( action === 'decimal') {
        console.log('decimal key')
    }

    if (action === 'clear') {
        currentInput.innerHTML = '0'
        console.log('clear key', currentInput.innerHTML)
    }

    if (action === 'evaluate') {
        console.log('equals key')
    }

    else if (!action) {
        currentInput.innerHTML = currentInput.innerHTML + key.value
        console.log(currentInput.innerHTML)
    }
})
*/

buttons.forEach((btn) => {
    btn.addEventListener('click', i => {
        const key = i.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = currentInput.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        console.log('clicked')

        if (!action) {
            if (displayedNum === '0' ||
                previousKeyType === 'operator') {
                    currentInput.textContent = keyContent
                    Array.from(key.parentNode.children).forEach(i => i.classList.remove('active_fun'))
                }
            else 
                currentInput.textContent = currentInput.textContent + keyContent
                calculator.dataset.previousKeyType = 'num'
                console.log(currentInput.textContent)
        }

        if (action === 'decimal') {
            if (!currentInput.textContent.includes('.')) {
                currentInput.textContent = currentInput.textContent + '.'
                calculator.dataset.previousKeyType = 'decimal'
                console.log('decimal key')
            }
            else
                console.log('error')
        }

        if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ) {
            key.classList.add('active_fun')
            calculator.dataset.firstValue = currentInput.textContent
            calculator.dataset.operator = action
            calculator.dataset.previousKeyType = 'operator'
            console.log(action)
        }

        if (action === 'clear') {
            currentInput.textContent = '0'
            console.log('clear key')
        }

        if (action === 'evaluate') {
            calculator.dataset.previousKeyType = 'evaluate'
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = currentInput.textContent
            const calculate = (firstValue, operator, secondValue) => {
                let result = ''

                if (operator === 'add') {
                    console.log(firstValue, secondValue)
                    result = parseFloat(firstValue) + parseFloat(secondValue)                    
                } else if (operator === 'subtract') {
                    console.log(firstValue, secondValue)
                    result = parseFloat(firstValue) - parseFloat(secondValue)
                } else if (operator === 'multiply') {
                    console.log(firstValue, secondValue)
                    result = parseFloat(firstValue) * parseFloat(secondValue)
                } else if (operator === 'divide') {
                    console.log(firstValue, secondValue)
                    result = parseFloat(firstValue) / parseFloat(secondValue)
                }

                return result
            }
            currentInput.textContent = calculate(firstValue, operator, secondValue)
            console.log('equals key')
        }
    })
})