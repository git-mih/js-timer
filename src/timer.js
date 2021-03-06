class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        
        // Should I use the constructor in order to add the events?
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.intervalID = setInterval(this.tick, 50);
    }

    pause = () => {
        clearInterval(this.intervalID);
    }


    tick = () => {
        
        // Lots of if-else statements, might be a better way.
        // I also dont like the fact that im using 'this' everywhere.
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            if (this.onTick) {
                this.onTick(this.durationInput.value);
            }
            this.timeRemaining = this.timeRemaining - 0.05;
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }

}
