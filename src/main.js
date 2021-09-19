const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#play-button');
const pauseBtn = document.querySelector('#pause-button');

const circle = document.querySelector('circle');
const circleRadius = circle.getAttribute('r')
const perimeter = circleRadius * 2 * Math.PI; // ~1193
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log('Time started')
    },
    onTick(time) {
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset -= 1;
    },
    onComplete() {
        console.log('Time is completed.')
    }
});
