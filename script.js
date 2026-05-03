/**
 * Debounce Function
 * 
 * Returns a function that, as long as it continues to be invoked, 
 * will not be triggered. The function will be called after it 
 * stops being called for N milliseconds.
 */
function debounce(func, delay = 1000) {
    let timer;

    return (...args) => {
        // Clear the previous timer
        clearTimeout(timer);
        console.log("Timer Reset! Waiting for silence...");

        // Start a new timer
        timer = setTimeout(() => {
            func.apply(this, args);
            console.log("Debounced Function Executed!");
        }, delay);
    };
}

// --- ELEMENTS ---
const input = document.getElementById('search');
const normalDisplay = document.getElementById('normal-text');
const debouncedDisplay = document.getElementById('debounced-text');

// --- IMPLEMENTATION ---

// 1. Immediate Update
input.addEventListener('input', (e) => {
    const value = e.target.value || "---";
    normalDisplay.textContent = value;
    console.log("Normal Update: " + value);
});

// 2. Debounced Update
const updateDebouncedText = debounce((value) => {
    debouncedDisplay.textContent = value || "---";
}, 1000);

input.addEventListener('input', (e) => {
    updateDebouncedText(e.target.value);
});
