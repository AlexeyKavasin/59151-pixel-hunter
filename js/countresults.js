export const countResults = (answersArr, lives) => {
  if (typeof lives !== `number` || !Array.isArray(answersArr)) {
    return -1;
  }

  if (lives <= 0 || answersArr.length < 10) {
    return -1;
  }

  let answerPoints = 0;
  let livesBonus = lives * 50;
  let timeBonus = 0;

  answersArr.forEach((a) => {
    if (a.answered === true) {
      answerPoints += 100;
    }
    if (a.time < 10) {
      timeBonus += 50;
    }
    if (a.time > 20) {
      timeBonus -= 50;
    }
  });
  return answerPoints + livesBonus + timeBonus;
};
