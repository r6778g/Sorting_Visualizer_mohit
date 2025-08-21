// === Merge Sort Visualizer ===

function Merge() {
    // Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;
    mergePartition(0, array_size - 1);

    enable_buttons();
}

// Merge two halves
function merge(start, mid, end) {
    let leftIndex = start;
    let rightIndex = mid + 1;

    let tempArr = [];
    let k = 0;

    // Merge logic
    for (let i = start; i <= end; i++) {
        if (leftIndex > mid) {
            tempArr[k++] = div_sizes[rightIndex];
            div_update(divs[rightIndex], div_sizes[rightIndex], "red");
            rightIndex++;
        } else if (rightIndex > end) {
            tempArr[k++] = div_sizes[leftIndex];
            div_update(divs[leftIndex], div_sizes[leftIndex], "red");
            leftIndex++;
        } else if (div_sizes[leftIndex] < div_sizes[rightIndex]) {
            tempArr[k++] = div_sizes[leftIndex];
            div_update(divs[leftIndex], div_sizes[leftIndex], "red");
            leftIndex++;
        } else {
            tempArr[k++] = div_sizes[rightIndex];
            div_update(divs[rightIndex], div_sizes[rightIndex], "red");
            rightIndex++;
        }
    }

    // Copy back to original array
    for (let t = 0; t < k; t++) {
        div_sizes[start + t] = tempArr[t];
        div_update(divs[start + t], div_sizes[start + t], "green");
    }
}

// Recursive partitioning
function mergePartition(start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);

        div_update(divs[mid], div_sizes[mid], "yellow"); // Highlight mid

        mergePartition(start, mid);
        mergePartition(mid + 1, end);

        merge(start, mid, end);
    }
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    Refactored & Cleaned: ✅
    *****************
*/
