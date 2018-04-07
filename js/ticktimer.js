export const tickTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be a number`);
  }

  if (time <= 0) {
    throw new Error(`Time should be a positive number`);
  }

  const timerObj = {
    time,
    active: true,
    tick: () => {
      timerObj.time -= 1;
      if (timerObj.time <= 0) {
        timerObj.active = false;
        return `Time is up`;
      }
    }
  };

  return timerObj;
};
