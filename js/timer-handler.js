const timerListener = ({detail: {timer}}) => {
  const timerEl = document.querySelector(`.game__timer`);
  if (timerEl) {
    timerEl.textContent = timer;
  }
};

export default () => {
  document.removeEventListener(`timerUpdate`, timerListener);
  document.addEventListener(`timerUpdate`, timerListener);
};
