/**
 * Debounce Implementation
 */
const debounce = (callback, delay) => {
    let timer;

    return (value) => {
        // Clear previous timer and reset countdown
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(value);
        }, delay);
    };
};

// SELECTING HTML ELEMENTS
const inputField = document.getElementById('search');
const normalText = document.getElementById('normal-text');
const debouncedText = document.getElementById('debounced-text');


// APPLYING THE LOGIC

// A. Immediate Update (Every keystroke)
inputField.addEventListener('input', (event) => {
    normalText.textContent = event.target.value || "---";
});

// B. Debounced Update (Waits for 1000ms pause)
const processInput = debounce((text) => {
    debouncedText.textContent = text || "---";
    console.log("Debounced function executed!");
}, 1000);

inputField.addEventListener('input', (event) => {
    processInput(event.target.value);
});
