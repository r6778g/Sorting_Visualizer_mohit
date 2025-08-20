function Heap() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    heap_sort();

    enable_buttons();
}

function swap(i, j) {
    div_update(divs[i], div_sizes[i], "red");   // highlight
    div_update(divs[j], div_sizes[j], "red");

    let temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "red");   // update height
    div_update(divs[j], div_sizes[j], "red");

    div_update(divs[i], div_sizes[i], "blue");  // restore
    div_update(divs[j], div_sizes[j], "blue");
}

function max_heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // Check left child
    if (l < n && div_sizes[l] > div_sizes[largest]) {
        largest = l;
    }

    // Check right child
    if (r < n && div_sizes[r] > div_sizes[largest]) {
        largest = r;
    }

    // If root is not largest, swap and continue heapify
    if (largest !== i) {
        div_update(divs[i], div_sizes[i], "red");       // highlight parent
        div_update(divs[largest], div_sizes[largest], "red");

        swap(i, largest);

        div_update(divs[i], div_sizes[i], "blue");      // restore
        div_update(divs[largest], div_sizes[largest], "blue");

        max_heapify(n, largest);
    }
}

function heap_sort() {
    // Step 1: Build max heap
    for (let i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        max_heapify(array_size, i);
    }

    // Step 2: Extract elements one by one
    for (let i = array_size - 1; i > 0; i--) {
        div_update(divs[0], div_sizes[0], "red");  // highlight root
        swap(0, i);

        div_update(divs[i], div_sizes[i], "green"); // mark sorted

        max_heapify(i, 0);
    }

    // Mark final element sorted
    div_update(divs[0], div_sizes[0], "green");
}
