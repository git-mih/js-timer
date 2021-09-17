
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
    }

    pause = () => {
        clearInterval(this.intervalID);
    }


    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time;
    }

}

const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#play-button');
const pauseBtn = document.querySelector('#pause-button');

const timer = new Timer(durationInput, startBtn, pauseBtn);

