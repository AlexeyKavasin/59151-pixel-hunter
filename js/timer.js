export const timer = () => {

  const interval = 1000;
  let timerId = null;
  let time = 0;

  const timerObj = {
    start: (timerValue) => {
      time = timerValue;
      timerId = setInterval(() => {
        time = time - 1;
        const event = time > 0 ?
          new CustomEvent(`timerUpdate`, {detail: {timer: time}}) :
          new CustomEvent(`timerStop`);

        document.dispatchEvent(event);
      }, interval);
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
