/*
-   [x] User can `start` a clock
-   [x] User can `stop` the clock
-   [x] When the clock is `stopped` the user can click `start` again and the clock will continue counting up
-   [x] User can `restart` the clock
-   [x] User can create `laps` - these will be displayed on the screen
-   [x] User can clear all the laps
*/
//const ellapsedTime = document.getElementById("ellapsed");
const milliseconds = document.getElementById("milliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapContainer = document.getElementById("lap");
const lapButton = document.getElementById("lap-button");

class Timer {
  constructor() {
    this.init = false;
    this.timer;
    this.ellapsed = 0;
    this.milliseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.laps = [];
  }
  start() {
    if (!this.init) {
      this.init = true;
      let ms = this.milliseconds,
        sec = this.seconds,
        min = this.minutes;
      this.timer = setInterval(() => {
        this.ellapsed += 1;
        if (ms < 99) {
          ms++;
        } else {
          ms = 0;
          sec += 1;
          if (sec > 59) {
            sec = 0;
            min += 1;
          }
        }
        this.milliseconds = ms;
        this.seconds = sec;
        this.minutes = min;
        milliseconds.innerText = this.milliseconds.toString().padStart(2, "0");
        seconds.innerText = this.seconds.toString().padStart(2, "0");
        minutes.innerText = this.minutes.toString().padStart(2, "0");
      }, 10);
    }
    return this;
  }
  pause() {
    this.init = false;
    clearInterval(this.timer);
    return this;
  }
  reset() {
    if (!this.init) {
      this.laps.length = 0;
      this.ellapsed = 0;
      this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      milliseconds.innerText = this.milliseconds.toString().padStart(2, "0");
      seconds.innerText = this.seconds.toString().padStart(2, "0");
      minutes.innerText = this.minutes.toString().padStart(2, "0");
      lapContainer.innerHTML = "";
      lapContainer.style.display = 'none';
      return this;
    }
  }
  lap({ minutes, seconds, milliseconds }) {
    if (this.init) {
      lapContainer.style.display = 'block';
      let lap = { minutes, seconds, milliseconds };
      this.laps.push(lap);
      const li = document.createElement("li");
      li.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
      lapContainer.append(li);
    }
  }
}


const timer = new Timer();

startButton.onclick = () => timer.start();
stopButton.onclick = () => timer.pause();
resetButton.onclick = () => timer.reset(timer);
lapButton.onclick = () => timer.lap(timer);
