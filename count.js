// Initial count value
let count = 0;

// Get DOM elements
const countEl = document.getElementById('count');
const incBtn = document.getElementById('increase');
const decBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Updates the displayed number and its color
function updateDisplay() {
    countEl.textContent = count;
    if (count > 0) {
        countEl.style.color = 'green';
    } else if (count < 0) {
        countEl.style.color = 'red';
    } else {
        countEl.style.color = 'black';
    }

}

// Event handlers
incBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    if (count !== 0) {
        count = 0;
        updateDisplay();
    }
});

// Initialize when loaded
updateDisplay();