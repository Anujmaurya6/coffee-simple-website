let count = 0;
let intervalId = null;

const counterDisplay = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      count++;
      counterDisplay.innerText = count;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  counterDisplay.innerText = count;
});
