/*
    *****************
    Main Control Script for Sorting Visualizer
    Refactored for readability, maintainability, and best practices
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
const BAR_MARGIN = 0.1; // percentage

// ==== DATA ====
let arraySize = parseInt(arraySizeInput.value);
let barHeights = [];
let barDivs = [];

// ==== EVENT LISTENERS ====
generateBtn.addEventListener("click", generateArray);
arraySizeInput.addEventListener("input", updateArraySize);
document.addEventListener("DOMContentLoaded", generateArray);

algoButtons.forEach(button => {
    button.addEventListener("click", runAlgorithm);
});

// ==== FUNCTIONS ====

// Generate a new random array and render bars
function generateArray() {
    container.innerHTML = "";
    barHeights = [];
    barDivs = [];

    for (let i = 0; i < arraySize; i++) {
        const height = Math.floor(Math.random() * 50) + BAR_MIN_HEIGHT; // simple random height
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

// Update array size from input
function updateArraySize() {
    arraySize = parseInt(arraySizeInput.value);
    generateArray();
}

// Disable all controls while sorting
function disableControls() {
    algoButtons.forEach(btn => {
        btn.className = "butt_locked";
        btn.disabled = true;
    });

    arraySizeInput.disabled = true;
    generateBtn.disabled = true;
    speedInput.disabled = true;
}

// Run the selected sorting algorithm
function runAlgorithm() {
    disableControls();
    this.classList.add("butt_selected");

    const algo = this.dataset.algo || this.textContent.trim();

    switch (algo) {
        case "Bubble": Bubble(); break;
        case "Selection": Selection_sort(); break;
        case "Insertion": Insertion(); break;
        case "Merge": Merge(); break;
        case "Quick": Quick(); break;
        case "Heap": Heap(); break;
        default:
            console.warn("Unknown algorithm:", algo);
    }
}
