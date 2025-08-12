/*
    *****************
    Main Control Script for Sorting Visualizer
    Refactored for readability, maintainability, and best practices
    *****************
*/

// ==== DOM ELEMENTS ====
const inp_as = document.getElementById("a_size");
let array_size = inp_as.value;

const inp_gen = document.getElementById("a_generate");
const inp_aspeed = document.getElementById("a_speed");

const algo_buttons = document.querySelectorAll(".algos button");

const cont = document.getElementById("array_container");
cont.style.flexDirection = "row";

// ==== DATA ====
let div_sizes = [];
let divs = [];
let margin_size;

// ==== EVENT LISTENERS ====
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);
window.onload = update_array_size;

algo_buttons.forEach(button => {
    button.addEventListener("click", run_algorithm);
});

// ==== FUNCTIONS ====

// Generate a new random array
function generate_array() {
    cont.innerHTML = "";

    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        
        divs[i] = document.createElement("div");
        margin_size = 0.1;

        divs[i].style = `
            margin: 0% ${margin_size}%;
            background-color: blue;
            width: ${100 / array_size - 2 * margin_size}%;
            height: ${div_sizes[i]}%;
        `;

        cont.appendChild(divs[i]);
    }
}

// Update array size and regenerate
function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

// Disable all control buttons while sorting
function disable_buttons() {
    algo_buttons.forEach(btn => {
        btn.classList.remove(...btn.classList);
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

    switch (this.dataset.algo || this.innerHTML) {
        case "Bubble":      Bubble(); break;
        case "Selection":   Selection_sort(); break;
        case "Insertion":   Insertion(); break;
        case "Merge":       Merge(); break;
        case "Quick":       Quick(); break;
        case "Heap":        Heap(); break;
    }
}
