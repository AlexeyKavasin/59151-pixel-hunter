export const tickTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be a number`);
  }

  const timerObj = {
    time,
    active: true,
    tick: () => {
      timerObj.time -= 1;
    }
  };

  if (time <= 0) {
    timerObj.active = false;
    return timerObj.active;
  }

  return timerObj;
};
