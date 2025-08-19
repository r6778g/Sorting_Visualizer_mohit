/*
    *****************
    Main Control Script for Sorting Visualizer
    Refactored for readability, maintainability, and best practices
    *****************
*/

// ==== DOM ELEMENTS ====
const inputSize = document.getElementById("a_size");
let arraySize = inputSize.value;

const inputGenerate = document.getElementById("a_generate");
const inputSpeed = document.getElementById("a_speed");

const algoButtons = document.querySelectorAll(".algos button");

const container = document.getElementById("array_container");
container.style.flexDirection = "row";

// ==== DATA ====
let divSizes = [];
let divs = [];

// ==== EVENT LISTENERS ====
inputGenerate.addEventListener("click", generateArray);
inputSize.addEventListener("input", updateArraySize);
window.onload = updateArraySize;

algoButtons.forEach(button => {
    button.addEventListener("click", runAlgorithm);
});

// ==== FUNCTIONS ====

// Generate a new random array
function generateArray() {
    container.innerHTML = "";
    divSizes = [];
    divs = [];

    for (let i = 0; i < arraySize; i++) {
        // Generate height between min and max
        const min = Number(inputSize.min);
        const max = Number(inputSize.max);
        divSizes[i] = Math.floor(Math.random() * (max - min) + min);

        // Create array bar
        const bar = document.createElement("div");
        bar.className = "array-bar";
        bar.style.height = `${divSizes[i]}%`;
        bar.style.width = `${100 / arraySize - 0.2}%`; // Adjusted width

        divs[i] = bar;
        container.appendChild(bar);
    }
}

// Update array size and regenerate
function updateArraySize() {
    arraySize = inputSize.value;
    generateArray();
}

// Disable all control buttons while sorting
function disableControls() {
    algoButtons.forEach(btn => {
        btn.classList.add("butt_locked");
        btn.disabled = true;
    });

    inputSize.disabled = true;
    inputGenerate.disabled = true;
    inputSpeed.disabled = true;
}

// Enable controls after sorting
function enableControls() {
    algoButtons.forEach(btn => {
        btn.classList.remove("butt_locked", "butt_selected");
        btn.disabled = false;
    });

    inputSize.disabled = false;
    inputGenerate.disabled = false;
    inputSpeed.disabled = false;
}

// Run selected sorting algorithm
function runAlgorithm() {
    disableControls();
    this.classList.add("butt_selected");

    const algo = this.dataset.algo || this.innerText;

    switch (algo) {
        case "Bubble":      Bubble(); break;
        case "Selection":   Selection_sort(); break;
        case "Insertion":   Insertion(); break;
        case "Merge":       Merge(); break;
        case "Quick":       Quick(); break;
        case "Heap":        Heap(); break;
        default:
            console.warn("Unknown algorithm selected:", algo);
            enableControls();
    }
}
