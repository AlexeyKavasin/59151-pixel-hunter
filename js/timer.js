export const timer = () => {

  const INTERVAL = 1000;
  let timerId = null;
  let time = 0;

  const timerObj = {
    start: (timerValue) => {
      time = timerValue;
      timerId = setInterval(() => {
        --time;
        const timerAction = time > 0 ?
          new CustomEvent(`timerUpdate`, {detail: {timer: time}}) :
          new CustomEvent(`timerStop`);

        document.dispatchEvent(timerAction);
      }, INTERVAL);
    },
    stop: () => {
      clearInterval(timerId);
    },
    clear: () => {
      time = 0;
      clearInterval(timerId);
    },
    getTimer: () => {
      return time;
    }
  };

  return timerObj;
};
