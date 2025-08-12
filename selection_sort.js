/*
    *****************
    SELECTION SORT VISUALIZATION
    Refactored for clarity and maintainability
    *****************
*/
function Selection_sort() {
    // Set time complexities
    document.getElementById("Time_Worst").innerText = "O(N²)";
    document.getElementById("Time_Average").innerText = "Θ(N²)";
    document.getElementById("Time_Best").innerText = "Ω(N²)";

    // Set space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (let i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i], "red"); // Mark current position
        let index_min = i;

        // Find the minimum element in the unsorted part
        for (let j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow"); // Checking element

            if (div_sizes[j] < div_sizes[index_min]) {
                // Revert previous min (if not the same as i)
                if (index_min !== i) {
                    div_update(divs[index_min], div_sizes[index_min], "blue");
                }
                index_min = j; // Update min index
                div_update(divs[index_min], div_sizes[index_min], "red");
            } else {
                div_update(divs[j], div_sizes[j], "blue"); // Not the min
            }
        }

        // Swap the found min with the first element
        if (index_min !== i) {
            let temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");  // Height update
            div_update(divs[i], div_sizes[i], "red");                  // Height update
            div_update(divs[index_min], div_sizes[index_min], "blue"); // Back to normal
        }

        div_update(divs[i], div_sizes[i], "green"); // Mark as sorted
    }

    // Mark last element as sorted
    div_update(divs[array_size - 1], div_sizes[array_size - 1], "green");

    enable_buttons(); // Enable controls again
}
