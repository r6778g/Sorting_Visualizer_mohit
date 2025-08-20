// Default visualization speed
let speed = 1000;
let delay_time = 10000 / (Math.floor(array_size / 10) * speed);
let c_delay = 0; // updated on every div change

// Handle speed change from slider
inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
    const array_speed = parseInt(inp_aspeed.value);

    // Map slider value → speed multiplier
    switch (array_speed) {
        case 1: speed = 10000; break;  // Slowest
        case 2: speed = 1000; break;
        case 3: speed = 100; break;
        case 4: speed = 10; break;
        case 5: speed = 1; break;      // Fastest
    }

    // Update delay time
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

// Update a single bar
function div_update(cont, height, color) {
    window.setTimeout(() => {
        cont.style.height = height + "%";
        cont.style.backgroundColor = color;
        cont.style.margin = "0% " + margin_size + "%";
        cont.style.width = (100 / array_size - 2 * margin_size) + "%";
    }, (c_delay += delay_time));
}

// Re-enable controls after sorting
function enable_buttons() {
    window.setTimeout(() => {
        for (let i = 0; i < butts_algos.length; i++) {
            butts_algos[i].className = "butt_unselected";
            butts_algos[i].disabled = false;
        }
        inp_as.disabled = false;
        inp_gen.disabled = false;
        inp_aspeed.disabled = false;
    }, (c_delay += delay_time));
}
