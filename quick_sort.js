// === Quick Sort Visualizer ===

function Quick() {
    // Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;
    quickSort(0, array_size - 1);

    enable_buttons();
}

// Partition function
function partition(start, end) {
    let i = start + 1;
    let pivot = div_sizes[start]; // Choose first element as pivot

    div_update(divs[start], pivot, "yellow"); // Highlight pivot

    for (let j = start + 1; j <= end; j++) {
        if (div_sizes[j] < pivot) {
            div_update(divs[j], div_sizes[j], "yellow"); // Highlight current

            // Highlight swap
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            // Swap values
            [div_sizes[i], div_sizes[j]] = [div_sizes[j], div_sizes[i]];

            // Update heights
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");

            i++;
        }
    }

    // Place pivot in correct position
    div_update(divs[start], div_sizes[start], "red");
    div_update(divs[i - 1], div_sizes[i - 1], "red");

    [div_sizes[start], div_sizes[i - 1]] = [div_sizes[i - 1], div_sizes[start]];

    div_update(divs[start], div_sizes[start], "red");
    div_update(divs[i - 1], div_sizes[i - 1], "red");

    // Mark sorted part
    for (let t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "green");
    }

    return i - 1; // Pivot index
}

// Recursive Quick Sort
function quickSort(start, end) {
    if (start < end) {
        let pivotIndex = partition(start, end);

        quickSort(start, pivotIndex - 1); // Left side
        quickSort(pivotIndex + 1, end);   // Right side
    }
}
