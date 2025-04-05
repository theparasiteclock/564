// script.js

// Total time in seconds (564 hours = 564 * 60 * 60 seconds)
let totalTimeInSeconds = 564 * 60 * 60;

// Function to format time as HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${String(hours).padStart(3, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to update the timer
function updateTimer() {
  const timerElement = document.getElementById('timer');

  if (totalTimeInSeconds <= 0) {
    clearInterval(interval);
    timerElement.textContent = '000:00:00'; // Stop at zero
    alert("Time's up! Reflect on your progress and keep moving forward.");
    return;
  }

  timerElement.textContent = formatTime(totalTimeInSeconds);
  totalTimeInSeconds--;
}

// Start the countdown
const interval = setInterval(updateTimer, 1000);
