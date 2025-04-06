// Hardcoded start time (replace this with the actual start time of your timer)
const startTime = new Date("2025-04-06T18:00:00Z").getTime(); // Example: October 20, 2023, at midnight UTC

// Total time in milliseconds (564 hours = 564 * 60 * 60 * 1000 milliseconds)
const totalTimeInMilliseconds = 564 * 60 * 60 * 1000;

// Function to format time as HH:MM:SS
function formatTime(milliseconds) {
  const remainingTime = Math.max(0, totalTimeInMilliseconds - (Date.now() - milliseconds));
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return `${String(hours).padStart(3, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to update the timer
function updateTimer() {
  const timerElement = document.getElementById('timer');

  const elapsedTime = Date.now() - startTime; // Time elapsed since the start
  if (elapsedTime >= totalTimeInMilliseconds) {
    timerElement.textContent = '000:00:00'; // Stop at zero
    clearInterval(interval);
    alert("Time's up! Reflect on your progress and keep moving forward.");
    return;
  }

  timerElement.textContent = formatTime(startTime);
}

// Start the countdown
const interval = setInterval(updateTimer, 1000);
