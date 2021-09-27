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
    } else if (operator == "/") {
        return divide(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    }
}