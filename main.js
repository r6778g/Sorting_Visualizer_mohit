/*
Variable naming convention: <object>_<action>_<objectname>
Example -> button_click_b1
*/

// ===== DOM Elements =====
const input_arraySize = document.getElementById("a_size");
let array_size = Number(input_arraySize.value);

const button_generateArray = document.getElementById("a_generate");
const input_arraySpeed = document.getElementById("a_speed");
const buttons_algorithms = document.querySelectorAll(".algos button");

const container_array = document.getElementById("array_container");
container_array.style.flexDirection = "row";

// ===== Variables =====
let div_sizes = [];
let divs = [];
let margin_size = 0.1;

// ===== Event Listeners =====
button_generateArray.addEventListener("click", generateArray);
input_arraySize.addEventListener("input", updateArraySize);

window.onload = updateArraySize;

buttons_algorithms.forEach(button => {
    button.addEventListener("click", runAlgorithm);
});

// ===== Functions =====

// Generate the array and its visual representation
function generateArray() {
    container_array.innerHTML = "";

    for (let i = 0; i < array_size; i++) {
        const height = Math.floor(Math.random() * 0.5 * (input_arraySize.max - input_arraySize.min)) + 10;
        div_sizes[i] = height;

        const bar = document.createElement("div");
        bar.style.margin = `0% ${margin_size}%`;
        bar.style.backgroundColor = "blue";
        bar.style.width = `${100 / array_size - 2 * margin_size}%`;
        bar.style.height = `${height}%`;

        divs[i] = bar;
        container_array.appendChild(bar);
    }
}

// Update array size and regenerate
function updateArraySize() {
    array_size = Number(input_arraySize.value);
    generateArray();
}

// Disable UI interactions during sorting
function disableButtons() {
    buttons_algorithms.forEach(button => {
        button.classList.remove(...button.classList);
        button.classList.add("butt_locked");
        button.disabled = true;
    });

    input_arraySize.disabled = true;
    button_generateArray.disabled = true;
    input_arraySpeed.disabled = true;
}

// Run selected sorting algorithm
function runAlgorithm() {
    disableButtons();
    this.classList.add("butt_selected");

    switch (this.innerText.trim()) {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;
        case "Heap":
            Heap();
            break;
    }
}
