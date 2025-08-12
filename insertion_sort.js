/*
    *****************
    INSERTION SORT VISUALIZATION
    Refactored for clarity and maintainability
    *****************
*/
function Insertion() {
    // Time complexities
    document.getElementById("Time_Worst").innerText = "O(N²)";
    document.getElementById("Time_Average").innerText = "Θ(N²)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow"); // Highlight current element

        let key = div_sizes[j];
        let i = j - 1;

        // Shift elements greater than key
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "red");     // Current compared
            div_update(divs[i + 1], div_sizes[i + 1], "red"); // Shift position

            div_sizes[i + 1] = div_sizes[i]; // Shift

            div_update(divs[i], div_sizes[i], "red");     // Height update
            div_update(divs[i + 1], div_sizes[i + 1], "red");

            div_update(divs[i], div_sizes[i], "blue"); // Back to default color

            if (i === j - 1) {
                div_update(divs[i + 1], div_sizes[i + 1], "yellow"); // Keep key highlighted
            } else {
                div_update(divs[i + 1], div_sizes[i + 1], "blue");
            }

            i--;
        }

        // Place key in correct position
        div_sizes[i + 1] = key;

        // Mark sorted part so far
        for (let t = 0; t <= j; t++) {
            div_update(divs[t], div_sizes[t], "green");
        }
    }

    enable_buttons(); // Re-enable controls
}
