function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value).toFixed(2); // Add toFixed(2) to display up to 2 decimal places
    } catch (error) {
        display.value = 'Error';
    }
}