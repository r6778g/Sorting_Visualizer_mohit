/*
    *****************
    Main Control Script for Sorting Visualizer
    Improved for readability, maintainability, and best practices
    *****************
*/

// ==== DOM ELEMENTS ====
const arraySizeInput = document.getElementById("a_size");
const generateBtn = document.getElementById("a_generate");
const speedInput = document.getElementById("a_speed");
const algoButtons = document.querySelectorAll(".algos button");
const container = document.getElementById("array_container");

container.style.flexDirection = "row";

// ==== CONFIG ====
const BAR_MIN_HEIGHT = 10;
const BAR_MARGIN = 0.1;

// ==== DATA ====
let arraySize = arraySizeInput.value;
let barHeights = [];
let barDivs = [];

// ==== EVENT LISTENERS ====
generateBtn.addEventListener("click", generateArray);
arraySizeInput.addEventListener("input", updateArraySize);
document.addEventListener("DOMContentLoaded", updateArraySize);

algoButtons.forEach(button => {
    button.addEventListener("click", runAlgorithm);
});

// ==== FUNCTIONS ====

// Generate a new random array
function generateArray() {
    container.innerHTML = "";
    barHeights = [];
    barDivs = [];

    for (let i = 0; i < arraySize; i++) {
        const height = Math.floor(Math.random() * 0.5 * (arraySizeInput.max - arraySizeInput.min)) + BAR_MIN_HEIGHT;
        barHeights.push(height);

        const bar = document.createElement("div");
        bar.style.margin = `0% ${BAR_MARGIN}%`;
        bar.style.backgroundColor = "blue";
        bar.style.width = `${100 / arraySize - 2 * BAR_MARGIN}%`;
        bar.style.height = `${height}%`;

        barDivs.push(bar);
        container.appendChild(bar);
    }
}

// Update array size and regenerate
function updateArraySize() {
    arraySize = arraySizeInput.value;
    generateArray();
}

// Disable all control buttons while sorting
function disableControls() {
    algoButtons.forEach(btn => {
        btn.className = "butt_locked";
        btn.disabled = true;
    });

    arraySizeInput.disabled = true;
    generateBtn.disabled = true;
    speedInput.disabled = true;
}

// Run selected sorting algorithm
function runAlgorithm() {
    disableControls();
    this.classList.add("butt_selected");

    const algo = this.dataset.algo || this.textContent.trim();
    switch (algo) {
        case "Bubble":    Bubble(); break;
        case "Selection": Selection_sort(); break;
        case "Insertion": Insertion(); break;
        case "Merge":     Merge(); break;
        case "Quick":     Quick(); break;
        case "Heap":      Heap(); break;
        default:
            console.warn("Unknown algorithm:", algo);
    }
}
