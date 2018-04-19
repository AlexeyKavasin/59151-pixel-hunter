const answerPoints = {
  correct: 100,
  fast: 50,
  slow: -50,
  failed: -1,
  lives: 50
};

export const countResults = (answersArr, lives) => {
  if (typeof lives !== `number` || !Array.isArray(answersArr)) {
    return answerPoints.failed;
  }

  if (lives < 1 || answersArr.length < 10) {
    return answerPoints.failed;
  }

  let score = lives * answerPoints.lives;

  answersArr.forEach((a) => {
    switch (a) {
      case `correct`:
        score += answerPoints.correct;
        break;
      case `fast`:
        score += answerPoints.correct + answerPoints.fast;
        break;
      case `slow`:
        score += answerPoints.correct + answerPoints.slow;
        break;
    }
  });

  return score;
};
