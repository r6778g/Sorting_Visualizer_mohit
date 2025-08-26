/*
    *****************
    Main Control Script for Sorting Visualizer
    Refactored for readability, maintainability, and best practices
    *****************
*/

// ==== DOM ELEMENTS ====
const inp_as = document.getElementById("a_size");
const inp_gen = document.getElementById("a_generate");
const inp_aspeed = document.getElementById("a_speed");
const cont = document.getElementById("array_container");
const algo_buttons = document.querySelectorAll(".algos button");

cont.style.flexDirection = "row";

// ==== DATA ====
let array_size = +inp_as.value;
let div_sizes = [];
let divs = [];
let margin_size = 0.1;

// ==== EVENT LISTENERS ====
inp_gen.addEventListener("click", generateArray);
inp_as.addEventListener("input", updateArraySize);
window.addEventListener("load", updateArraySize);

algo_buttons.forEach(button => {
    button.addEventListener("click", () => runAlgorithm(button));
});

// ==== FUNCTIONS ====

// Generate a new random array
function generateArray() {
    cont.innerHTML = "";
    div_sizes = [];
    divs = [];

    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * (inp_as.max - inp_as.min) * 0.5) + 10;

        const div = document.createElement("div");
        div.style.margin = `0% ${margin_size}%`;
        div.style.backgroundColor = "blue";
        div.style.width = `${100 / array_size - 2 * margin_size}%`;
        div.style.height = `${div_sizes[i]}%`;

        divs.push(div);
        cont.appendChild(div);
    }
}

// Update array size and regenerate
function updateArraySize() {
    array_size = +inp_as.value;
    generateArray();
}

// Disable all control buttons while sorting
function disableButtons() {
    algo_buttons.forEach(btn => {
        btn.classList.remove("butt_selected");  // reset active state
        btn.classList.add("butt_locked");
        btn.disabled = true;
    });

    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
}

// Enable buttons (after sorting finishes)
function enableButtons() {
    algo_buttons.forEach(btn => {
        btn.classList.remove("butt_locked");
        btn.disabled = false;
    });

    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
}

// Run selected sorting algorithm
function runAlgorithm(button) {
    disableButtons();
    button.classList.add("butt_selected");

    const algo = button.dataset.algo || button.innerText.trim();

    switch (algo) {
        case "Bubble":    Bubble(); break;
        case "Selection": Selection_sort(); break;
        case "Insertion": Insertion(); break;
        case "Merge":     Merge(); break;
        case "Quick":     Quick(); break;
        case "Heap":      Heap(); break;
        default: console.warn(`Unknown algorithm: ${algo}`);
    }
}
