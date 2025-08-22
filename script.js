const addButton = document.getElementById('addbutton');
const usertask = document.getElementById('taskid');
const tasklist = document.getElementById('tasklist');

// Add task functionality
addButton.addEventListener('click', addTask);

function addTask() {
    const newTask = usertask.value.trim();

    if (newTask !== '') {
        const taskinList = document.createElement('li');
        taskinList.textContent = newTask;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "15px";

        deleteBtn.addEventListener('click', function() {
            taskinList.remove();
        });

        taskinList.appendChild(deleteBtn);
        tasklist.appendChild(taskinList);

        usertask.value = '';
    }
}

// Pomodoro Timer
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const breakBtn = document.getElementById("break");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener('click', startTimer);
breakBtn.addEventListener('click', startBreak);
resetBtn.addEventListener('click', resetTimer);

let timerRunning = false;
let timeLeft = 1500; // 25 minutes
let timer;

// Format time MM:SS
function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update timer display
function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

// Start/Pause timer
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timerRunning = false;
                alert("Time is up! Take a break!");
            }
        }, 1000);
        startBtn.textContent = "Pause";
    } else {
        clearInterval(timer);
        timerRunning = false;
        startBtn.textContent = "Start";
    }
}

// Reset timer
function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timeLeft = 1500; // back to 25 min
    updateDisplay();
    startBtn.textContent = "Start";
}

// Start a break (5 minutes)
function startBreak() {
    clearInterval(timer);
    timerRunning = false;
    timeLeft = 300; // 5 min
    updateDisplay();
    startBtn.textContent = "Start";
}

// Initialize display
updateDisplay();
