const startBtn = document.querySelector('.js-start');
const resetBtn = document.querySelector('.js-reset');
const stopwatch = document.querySelector('.js-time');
const takeLap = document.querySelector('.js-take-lap');
const laps = document.querySelector('.js-laps');

let deltaTime = 0;
const timer = {
  id: null,
  startTime: 0,
  deltaTime: 0,
  isActive: false,
  start() {
    if (!this.isActive) {
      this.isActive = true;
      startBtn.textContent = 'Pause';
      this.startTime = Date.now() - deltaTime;
      this.id = setInterval(() => {
        const currentTime = Date.now() - this.deltaTime;
        deltaTime = currentTime - this.startTime;
        updateTime(deltaTime);
      }, 100);
    } else {
      this.isActive = false;
      startBtn.textContent = 'Continue'
      clearInterval(this.id);
    }
  },
  reset() {
    clearInterval(this.id);
    deltaTime = 0;
    startBtn.textContent = 'Start';
    updateTime(this.deltaTime);
  },
  takeLap() {
    if(deltaTime === 0) return;
    const finish = formatTime(deltaTime);
    const li = document.createElement('li');
    li.textContent = finish;
    laps.append(li);
  }
};

startBtn.addEventListener('click', timer.start.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));
takeLap.addEventListener('click', timer.takeLap.bind(timer));

function updateTime(time) {
  const formatterTime = formatTime(time);
  stopwatch.textContent = formatterTime;
}

function formatTime(ms) {
  const date = new Date(ms);
  let minute = date.getMinutes();
  minute = twoNumber(minute);
  let seconds = date.getSeconds();
  seconds = twoNumber(seconds);
  const nilliseconds = String(date.getMilliseconds()).slice(0, 1);
  return `${minute}:${seconds}.${nilliseconds}`;
}

function twoNumber(dat) {
  dat = dat < 10 ? `0${dat}` : dat;
  return dat;
}
