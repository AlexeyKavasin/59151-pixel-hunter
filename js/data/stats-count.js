import {LEVELS_COUNT, POINTS, ANSWER_VALUES} from './constants';

export const calculateStats = (state, answers) => {
  if (answers.length < LEVELS_COUNT) {
    return {
      answers,
      bonuses: [],
      totalPoints: 0,
      totalResult: {
        success: false
      }
    };
  }

  const totalFastAnswers = answers.filter((answer) => answer === ANSWER_VALUES.fast).length;
  const totalSlowAnswers = answers.filter((answer) => answer === ANSWER_VALUES.slow).length;
  const totalCorrectAnswers = answers.filter((answer) => answer !== ANSWER_VALUES.wrong).length;
  const totalLivesRemained = state.lives;

  const regularPoints = totalCorrectAnswers * POINTS[ANSWER_VALUES.correct];
  const fastBonus = totalFastAnswers * POINTS[ANSWER_VALUES.fast];
  const slowBonus = totalSlowAnswers * POINTS[ANSWER_VALUES.slow];
  const livesBonus = totalLivesRemained * POINTS.lives;

  const bonuses = [];

  if (totalFastAnswers) {
    bonuses.push({
      title: `Бонус за скорость`,
      icon: `fast`,
      count: totalFastAnswers,
      points: POINTS[ANSWER_VALUES.fast],
      total: fastBonus
    });
  }

  if (totalSlowAnswers) {
    bonuses.push({
      title: `Штраф за медлительность`,
      icon: `slow`,
      count: totalSlowAnswers,
      points: POINTS[ANSWER_VALUES.slow],
      total: slowBonus
    });
  }

  if (totalLivesRemained) {
    bonuses.push({
      title: `Бонус за жизни`,
      icon: `alive`,
      count: totalLivesRemained,
      points: POINTS.lives,
      total: livesBonus
    });
  }

  const score = regularPoints + livesBonus + fastBonus + slowBonus;

  return {
    answers,
    bonuses,
    regularPoints,
    totalResult: {
      success: true,
      score
    }
  };

};

export const initStatCount = () => {
  window.gameStats = [];
};

export const addGameStats = (stats) => {
  window.gameStats.push(stats);
};

export const getGameStats = () => {
  return window.gameStats;
};
