const timerListener = ({detail: {timer}}) => {
  const LAST_SECONDS = 5;
  const timerEl = document.querySelector(`.game__timer`);
  if (timerEl) {
    timerEl.textContent = timer;
  }
  if (timer <= LAST_SECONDS) {
    timerEl.classList.add(`blinking`);
  } else {
    timerEl.classList.remove(`blinking`);
  }
};

export default () => {
  document.removeEventListener(`timerUpdate`, timerListener);
  document.addEventListener(`timerUpdate`, timerListener);
};
