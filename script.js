// --- 1. THE DEBOUNCE LOGIC (SIMPLE VERSION) ---

/**
 * Debounce helps us wait for a "pause" before running a function.
 * It's like an elevator: it waits for the last person to enter before moving.
 */
const debounce = (taskToRun, pauseTime = 1000) => {
    let timer; // This holds our "waiting" timer

    return (...args) => {
        // 1. If the user types again, KILL the old timer immediately!
        clearTimeout(timer);
        console.log("Typing... Timer Reset!");

        // 2. Start a fresh timer for 1 second (1000ms)
        timer = setTimeout(() => {
            // 3. This only runs if the user hasn't typed for a full second
            taskToRun(...args);
            console.log("Pause detected! Running the task...");
        }, pauseTime);
    };
}


// --- SELECTING HTML ELEMENTS ---
const inputField = document.getElementById('search');
const normalText = document.getElementById('normal-text');
const debouncedText = document.getElementById('debounced-text');


// --- THE "IMMEDIATE" VERSION (RUNS ON EVERY KEY) ---
inputField.addEventListener('input', (event) => {
    const userInput = event.target.value || "---";
    normalText.textContent = userInput;
});


// --- THE "DEBOUNCED" VERSION (WAITS FOR A PAUSE) ---

// We wrap our update function inside 'debounce'
const processDebouncedInput = debounce((text) => {
    debouncedText.textContent = text || "---";
}, 1000);

// We call the wrapped function instead of the normal one
inputField.addEventListener('input', (event) => {
    processDebouncedInput(event.target.value);
});
