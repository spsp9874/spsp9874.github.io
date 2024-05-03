const display = document.getElementById('volume-display');
const audioPlayer = document.getElementById('audio-player');
let currentVolume = 50;

function updateDisplay() {
    display.textContent = `Volume: ${currentVolume}%`;
    audioPlayer.volume = currentVolume / 100;
    if (audioPlayer.paused) {
        audioPlayer.play();
    }
}

document.getElementById('increase-volume').addEventListener('click', () => {
    if (currentVolume < 100) {
        currentVolume += 1;
        updateDisplay();
    }
});

document.getElementById('decrease-volume').addEventListener('click', () => {
    if (currentVolume > 0) {
        currentVolume -= 1;
        updateDisplay();
    }
});

// Initialize the audio player volume and play it
audioPlayer.volume = currentVolume / 100;
audioPlayer.play(); // Ensure the sound starts playing when the page loads
