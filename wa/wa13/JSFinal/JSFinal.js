const display = document.getElementById('volume-display');
let currentVolume = 50;
let increment = 1;

function cycleVolume() {
    if (currentVolume >= 100 || currentVolume <= 0) {
        increment = -increment;
    }
    currentVolume += increment;
    display.textContent = `Volume: ${currentVolume}%`;
}

// Start cycling the volume
const intervalId = setInterval(cycleVolume, 100);

document.getElementById('set-volume').addEventListener('click', () => {
    clearInterval(intervalId);
    display.textContent = `Volume Set To: ${currentVolume}%`;
});
