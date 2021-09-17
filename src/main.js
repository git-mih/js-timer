
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.intervalID = setInterval(this.tick, 1000);
    //                     setInterval -> int (interval ID)
    }

    tick = () => {
        const timeRemaining = parseFloat(this.durationInput.value);
        this.durationInput.value = timeRemaining - 1;
    }

    pause = () => {
        console.log(`clear interval id: ${this.intervalID}`)
        clearInterval(this.intervalID);
    }

}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#play-button');
const pauseBtn = document.querySelector('#pause-button');

const timer = new Timer(durationInput, startBtn, pauseBtn);

