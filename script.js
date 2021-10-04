//Adding Function
function add(a,b) {
    return a+b;
}

//Substracting Function
function subtract(a,b) {
    return a - b;
}

//Multiplying Function
function multiply(a,b) {
    return a*b;
}

//Dividing Function
function divide(a, b) {
    if (b === 0) {
        return "ERROR"
    } else {
        return a/b;
    }
}

//Operating function - Chooses a operator and calculate the total
function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "÷") {
        return divide(num1, num2);
    } else if (operator == "×") {
        return multiply(num1, num2);
    }
}

let x = '', y = '';
let is_x = false;

const number_buttons = document.querySelectorAll('button.number');
number_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const calculator_main_screen = document.querySelector('#calculator-display-main')
        if (is_x == false) {
            x += String(button.id)
            calculator_main_screen.innerHTML = x;
        } else {
            y += String(button.id)
            calculator_main_screen.innerHTML = y;
        }
    })
})

const operator_buttons = document.querySelectorAll('button.operator');
operator_buttons.forEach((button) => {
    const calculator_main_screen = document.querySelector('#calculator-display-main')
    const calculator_mini_screen = document.querySelector('#calculator-display-mini')
    button.addEventListener('click', () => {
        if (button.id != '=') {
            if (is_x == false) {
                calculator_mini_screen.innerHTML = calculator_main_screen.innerHTML + ` ${button.id} `;
                calculator_main_screen.innerHTML = '&nbsp;';
                is_x = true;
            } else {
                calculator_mini_screen.innerHTML += y + ` ${button.id} `;
                x = operate(parseFloat(x), parseFloat(y), button.id);
                console.log(x);
                y = ''
                calculator_main_screen.innerHTML = x;
            }
        }
    })
})

