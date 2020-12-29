const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const changeColor = function (event) {
  timerId = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  event.target.disabled = true;
};

const stopChangeColor = function () {
  clearInterval(timerId);
  btnStart.disabled = false;
};



btnStart.addEventListener("click", changeColor);
btnStop.addEventListener("click", stopChangeColor);

