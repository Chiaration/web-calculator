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

// Declaring the variables to be used in the calculator
let x = '', y = '';
let is_x = false;
let is_complete = false;
let operator = '';
const calculator_main_screen = document.querySelector('#calculator-display-main')
const calculator_mini_screen = document.querySelector('#calculator-display-mini')

//Select the number buttons
const number_buttons = document.querySelectorAll('button.number');
//Cycle through the buttons
number_buttons.forEach((button) => {
    //If the button is clicked, display the number on the screen
    button.addEventListener('click', () => {
        const calculator_main_screen = document.querySelector('#calculator-display-main')
        if (is_complete == false) {
            if (is_x == false) {
                if (button.id == '.') {
                    x_array = x.split('');
                    if (!x_array.includes('.')) {
                        x += String(button.id)
                        calculator_main_screen.innerHTML = x;
                        is_complete = false;
                    }
                } else {
                    x += String(button.id)
                    calculator_main_screen.innerHTML = x;
                    is_complete = false;
                }
            } else {
                if (button.id == '.') {
                    y_array = y.split('');
                    if (!y_array.includes('.')) {
                        y += String(button.id)
                        calculator_main_screen.innerHTML = y;
                        is_complete = false;
                    }
                } else {
                    y += String(button.id)
                    calculator_main_screen.innerHTML = y;
                    is_complete = false;
                }
            }

        }
    })
})

const operator_buttons = document.querySelectorAll('button.operator');
operator_buttons.forEach((button) => {
    //If the operator button is clicked, save the operator and calculate the answer
    button.addEventListener('click', () => {
        if (button.id != '=') {
            if (is_x == false) {
                calculator_mini_screen.innerHTML = calculator_main_screen.innerHTML + ` ${button.id} `;
                calculator_main_screen.innerHTML = '&nbsp;';
                operator = button.id;
                is_x = true;
            } else {
                if (is_complete == false) {
                    calculator_mini_screen.innerHTML = `${x} ${operator} ${y} = `;
                    x = operate(parseFloat(x), parseFloat(y), operator);
                    calculator_mini_screen.innerHTML += x;
                    y = 0;
                    calculator_main_screen.innerHTML = x;
                    is_complete = true;
                    operator = button.id;
                }
            }
        } else {
            if (is_complete == false) {
                calculator_mini_screen.innerHTML = `${x} ${operator} ${y} = `;
                x = operate(parseFloat(x), parseFloat(y), operator);
                calculator_mini_screen.innerHTML += x;
                calculator_main_screen.innerHTML = x;
                is_complete = true;
            }
        }
    })
})

const clear_button = document.querySelector('#clear');
const delete_button = document.querySelector('#delete');

//Clear the screen and the variables
clear_button.addEventListener('click', () => {
    x = ''
    y = ''
    is_x = false;
    calculator_main_screen.innerHTML = '&nbsp;';
    calculator_mini_screen.innerHTML = '&nbsp;';
    is_complete = false;
})

//Delete the last number on the current screen
delete_button.addEventListener('click', () => {
    if (is_complete == false) {
        if (is_x == false) {
            x = x.slice(0, -1);
            calculator_main_screen.innerHTML = x;
        } else {
            y = y.slice(0. -1);
            calculator_main_screen.innerHTML = y;
        }

    }
})