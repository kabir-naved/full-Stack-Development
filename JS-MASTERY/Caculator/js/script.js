document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('clear')) {
                clearDisplay();
            } else if (button.classList.contains('equals')) {
                calculateResult();
            } else if (button.classList.contains('operator') || button.classList.contains('number')) {
                appendToDisplay(button.innerText);
            } else if (button.classList.contains('percentage')) {
                calculatePercentage();
            }
        });
    });

    function appendToDisplay(value) {
        if (display.value === '0' && value !== '.') {
            display.value = value; // Replace '0' with the new value
        } else {
            display.value += value; // Append the new value to the existing display
        }
    }

    function clearDisplay() {
        display.value = '0'; // Reset the display to '0'
    }

    function calculateResult() {
        try {
            // Evaluate the expression safely
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error'; // Show error if the evaluation fails
        }
    }

    function calculatePercentage() {
        try {
            display.value = parseFloat(display.value) / 100; // Calculate percentage
        } catch (e) {
            display.value = 'Error'; // Show error if the conversion fails
        }
    }
});
