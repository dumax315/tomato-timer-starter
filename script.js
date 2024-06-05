const header = document.getElementById('header');
const paragraph = document.querySelector('p');
// paragraph.textContent = 'New text content';
const timerElement = document.getElementById("time-left")

function updateTimerDisplay(minutes, seconds){
    timerElement.innerText = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}

updateTimerDisplay(1000, 3)