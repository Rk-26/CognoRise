// script.js

document.addEventListener("DOMContentLoaded", () => {
    const datetimeInput = document.getElementById('datetime');
    const startButton = document.getElementById('start');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    
    let countdownInterval;

    startButton.addEventListener('click', () => {
        clearInterval(countdownInterval);
        const targetDate = new Date(datetimeInput.value);
        if (isNaN(targetDate)) {
            alert('Please enter a valid date and time.');
            return;
        }
        startCountdown(targetDate);
    });

    function startCountdown(targetDate) {
        countdownInterval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;
            
            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                alert('Countdown finished!');
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            daysSpan.textContent = formatTime(days);
            hoursSpan.textContent = formatTime(hours);
            minutesSpan.textContent = formatTime(minutes);
            secondsSpan.textContent = formatTime(seconds);
        }, 1000);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});
