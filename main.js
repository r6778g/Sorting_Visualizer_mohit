/*
    *****************
    Main Control Script for Sorting Visualizer
    Refactored for readability, maintainability, and best practices
    *****************
*/

// ==== DOM ELEMENTS ====
const inp_as = document.getElementById("a_size");
let array_size = parseInt(inp_as.value, 10);

const inp_gen = document.getElementById("a_generate");
const inp_aspeed = document.getElementById("a_speed");

const algo_buttons = document.querySelectorAll(".algos button");

const cont = document.getElementById("array_container");
cont.style.flexDirection = "row";

// ==== DATA ====
let div_sizes = [];
let divs = [];
const margin_size = 0.1; // fixed margin

// ==== EVENT LISTENERS ====
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);
window.addEventListener("load", update_array_size);

algo_buttons.forEach(button => {
    button.addEventListener("click", run_algorithm);
});

// ==== ALGORITHM MAPPING ====
const algorithms = {
    Bubble,
    Selection: Selection_sort,
    Insertion,
    Merge,
    Quick,
    Heap
};

// ==== FUNCTIONS ====

// Generate a new random array
function generate_array() {
    cont.innerHTML = "";

    const maxHeight = parseInt(inp_as.max, 10) || 100;
    const minHeight = 10;

    div_sizes = Array.from({ length: array_size }, () =>
        Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight
    );

    divs = div_sizes.map(size => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${size}%`;
        bar.style.width = `${100 / array_size - 2 * margin_size}%`;
        bar.style.margin = `0% ${margin_size}%`;
        cont.appendChild(bar);
        return bar;
    });
}

// Update array size and regenerate
function update_array_size() {
    array_size = parseInt(inp_as.value, 10);
    generate_array();
}

// Disable all control buttons while sorting
function disable_buttons() {
    algo_buttons.forEach(btn => {
        btn.classList.remove("butt_selected", "butt_unselected");
        btn.classList.add("butt_locked");
        btn.disabled = true;
    });

    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
}

// Run selected sorting algorithm
function run_algorithm() {
    disable_buttons();
    this.classList.add("butt_selected");

    const algoName = this.dataset.algo || this.innerHTML;
    algorithms[algoName]?.();
}
