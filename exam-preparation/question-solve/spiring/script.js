function calculate(operator) {
    const firstNumberInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const resultInput = document.getElementById('result');

    // Get the values and convert them to numbers
    const num1 = parseFloat(firstNumberInput.value);
    const num2 = parseFloat(secondNumberInput.value);

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        resultInput.value = ""; // Clear previous result
        return;
    }

    let calculationResult;

    switch (operator) {
        case '+':
            calculationResult = num1 + num2;
            break;
        case '-':
            calculationResult = num1 - num2;
            break;
        case '*':
            calculationResult = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                resultInput.value = ""; // Clear previous result
                return;
            }
            calculationResult = num1 / num2;
            break;
        case '%':
            calculationResult = num1 % num2;
            break;
        default:
            alert("Invalid operator!");
            resultInput.value = ""; // Clear previous result
            return;
    }

    // Display the result in the result input field
    resultInput.value = calculationResult;

    // // Also display as an alert message as requested
    alert(`The result of ${num1} ${operator} ${num2} is: ${calculationResult}`);
}

function sabbir(text){
    alert(text)
}