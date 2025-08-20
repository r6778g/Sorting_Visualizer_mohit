function Bubble() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
        for (let j = 0; j < array_size - i - 1; j++) {
            // Highlight current comparison
            div_update(divs[j], div_sizes[j], "yellow");
            div_update(divs[j + 1], div_sizes[j + 1], "yellow");

            if (div_sizes[j] > div_sizes[j + 1]) {
                // Swap with highlight
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");

                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                // Update swapped heights
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }

            // Restore colors after comparison
            div_update(divs[j], div_sizes[j], "blue");
            div_update(divs[j + 1], div_sizes[j + 1], "blue");
        }

        // Mark the last sorted element
        div_update(divs[array_size - i - 1], div_sizes[array_size - i - 1], "green");
    }

    // Finally, mark the first element as sorted
    div_update(divs[0], div_sizes[0], "green");

    enable_buttons();
}
