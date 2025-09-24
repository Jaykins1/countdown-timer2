let countdown;
let timeLeft = 300;
let isRunning = false;
let originalTime = 300;

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timeDisplay = document.getElementById('timeDisplay');
const status = document.getElementById('status');

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    updateInputs();
    setupEventListeners();
});

function setupEventListeners() {
    [hoursInput, minutesInput, secondsInput].forEach(input => {
        input.addEventListener('input', () => {
            if (!isRunning) {
                calculateTimeLeft();
                updateDisplay();
            }
        });
    }); 
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

function calculateTimeLeft(){
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    timeLeft = hours * 3600 + minutes * 60 + seconds;
    originalTime = timeLeft;
}

function updateDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateInputs(){
    const hours = Math.floor(originalTime / 3600);
    const minutes = Math.floor((originalTime % 3600) / 60);
    const seconds = originalTime % 60;

    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
}

function startTimer() {
    if (!isRunning) {
        if (timeLeft <= 0) {
            calculateTimeLeft();

            if (timeLeft <= 0) {
                showStatus("Please set a time first!", "#ff6b6b", 2000);
                return;
            }
        } 

        isRunning = true;
        showStatus("Timer running...", "#4CAF50");
        countdown = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                timerFinished();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
        showStatus("Timer paused", "#ff9800");
    }
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timeLeft = originalTime;
    updateDisplay();
    updateInputs();
    showStatus("Timer reset", "white", 2000); 
    status.classList.remove("finished");
}

function timerFinished() {
    clearInterval(countdown);
    isRunning = false;
    showStatus("🎉 Time's up!", "#ff6b6b");
    status.classList.add("finished");

    playNotification();

    setTimeout(() => {
        status.classList.remove("finished");
    }, 10000);
}

function showStatus(message, color, duration = 0) {
    status.textContent = message;
    status.style.color = color;
    if (duration > 0) {
        setTimeout(() => {
            status.textContent = "Ready to start";
            status.style.color = "white"; 
        }, duration);
    }
}

function playNotification() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Time's up!");
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

function handleVisibilityChange() {
    if (document.hidden && isRunning) {
        window.lastVisibilityTime = Date.now();
    } else if (!document.hidden && isRunning && window.lastVisibilityTime) {
        const elapsed = Math.floor((Date.now() - window.lastVisibilityTime) / 1000);
        timeLeft = Math.max(0, timeLeft - elapsed); 
        updateDisplay();

        if (timeLeft <= 0) {
            timerFinished();
        }
    }
} 


function quickSet(minutes, hours = 0, seconds = 0){
    if (!isRunning) { 
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
        calculateTimeLeft();
        updateDisplay();
        showStatus(`Set to ${hours}h ${minutes}m ${seconds}s`, "white"); 
    }
}