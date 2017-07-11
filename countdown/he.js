var myTime = document.querySelector('#mytime'),
    startBtn = document.querySelector('#start-btn'),
    pauseBtn = document.querySelector('#pause-btn'),
    resumeBtn = document.querySelector('#resume-btn'),
    timeBar = document.querySelector('#time-bar'),
    timeLeft,
    lastTimerId;
    
function showTime() {
    var seconds = Math.floor((timeLeft / 100));
    if (seconds) {
        timeBar.innerText = seconds + '.' + Math.floor((timeLeft % 100)/10) + (timeLeft % 10) + '秒';
    }else {
        timeBar.innerText = '0' + '.' + Math.floor((timeLeft % 100)/10) + (timeLeft % 10) + '秒';
    }
    if (timeLeft === 0) {
        pauseBtn.disabled = true;
        return;
    }
    lastTimerId = setTimeout(showTime, 10);
    timeLeft--;
}
startBtn.addEventListener('click', function () {
    timeLeft = parseInt(myTime.value) * 100;
    if (lastTimerId) {
        clearTimeout(lastTimerId);
    }
    showTime();
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
});
pauseBtn.addEventListener('click',function () {
    clearTimeout(lastTimerId);
    resumeBtn.disabled = false;
    pauseBtn.disabled = true;
});
resumeBtn.addEventListener('click', function () {
    timeLeft++;
    showTime();
    resumeBtn.disabled = true;
    pauseBtn.disabled = false;
})
