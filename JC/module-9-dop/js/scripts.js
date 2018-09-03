/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
let timerId = null;

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);

function handleStartBtnClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};

function handleStopBtnClick() {
  clearInterval(timerId);
};

function randomColor() {
  let randomColor = colors[randomNum()];
  return randomColor;
};

function randomNum() {
   return (Math.floor(Math.random() * colors.length));
}
 