/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    Refactored for readability and maintainability
    *****************
*/

function Insertion() {
    // Set Time complexities
    document.getElementById("Time_Worst").innerText = "O(N²)";
    document.getElementById("Time_Average").innerText = "Θ(N²)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Set Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow"); // Current element being compared

        let key = div_sizes[j];
        let i = j - 1;

        // Shift elements greater than key to the right
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "red");     // Comparing element
            div_update(divs[i + 1], div_sizes[i + 1], "red");

            div_sizes[i + 1] = div_sizes[i];             // Shift value right

            div_update(divs[i], div_sizes[i], "red");     // Height update
            div_update(divs[i + 1], div_sizes[i + 1], "red");

            div_update(divs[i], div_sizes[i], "blue");    // Revert color
            div_update(divs[i + 1], div_sizes[i + 1], 
                i === (j - 1) ? "yellow" : "blue"
            );

            i--;
        }

        // Place the key at correct position
        div_sizes[i + 1] = key;

        // Mark sorted portion in green
        for (let t = 0; t <= j; t++) {
            div_update(divs[t], div_sizes[t], "green");
        }
    }

    enable_buttons(); // Re-enable UI controls
}
