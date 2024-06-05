const header = document.getElementById('header');
const paragraph = document.querySelector('p');
// paragraph.textContent = 'New text content';
const timerElement = document.getElementById("time-left")

let timeLeft = 25*60;
function updateTimerDisplay(minutes, seconds) {
    timerElement.innerText = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}


const number = 123;
const paddedNumber = number.toString().padStart(6, '0'); // Result: '000123'
console.log(paddedNumber)



setInterval(() => {
    timeLeft--;
    let seconds = timeLeft%60;
    let minutes = Math.floor(timeLeft/60);
    if(timeLeft < 0){
        seconds = seconds*-1
        minutes+=1;
        if(minutes == 0){
            minutes = "-";
        }else{
            mintues = minutes.toString();

        }
    }else{
        minutes = minutes.toString();
    }
    
    updateTimerDisplay(minutes, seconds.toString())
}, 1000); // 1000 milliseconds = 5 seconds

document.getElementById("break-btn").addEventListener("click", () => {
    timeLeft = 5*60 
})

document.getElementById("study-btn").addEventListener("click", () => {
    timeLeft = 25*60 
})