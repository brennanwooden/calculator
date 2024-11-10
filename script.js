document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    // Update the display with the current input
    function updateDisplay() {
        display.textContent = currentInput || '0';
    }

    // Handle button click
    function handleButtonClick(value) {
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = String(eval(previousInput + operator + currentInput));
                operator = '';
                previousInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value; // add numbers and decimal point
        }
        updateDisplay();
    }

    // Add event listeners to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.textContent));
    });
});
