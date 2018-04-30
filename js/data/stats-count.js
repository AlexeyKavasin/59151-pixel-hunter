import {LEVELS_COUNT, Points, AnswerValues} from './constants';

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

  const totalFastAnswers = answers.filter((answer) => answer === AnswerValues.FAST).length;
  const totalSlowAnswers = answers.filter((answer) => answer === AnswerValues.SLOW).length;
  const totalCorrectAnswers = answers.filter((answer) => answer !== AnswerValues.WRONG).length;
  const totalLivesRemained = state.LIVES;

  const regularPoints = totalCorrectAnswers * Points[AnswerValues.CORRECT];
  const fastBonus = totalFastAnswers * Points[AnswerValues.FAST];
  const slowBonus = totalSlowAnswers * Points[AnswerValues.SLOW];
  const livesBonus = totalLivesRemained * Points.LIVES;

  const bonuses = [];

  if (totalFastAnswers) {
    bonuses.push({
      title: `Бонус за скорость`,
      icon: `fast`,
      count: totalFastAnswers,
      points: Points[AnswerValues.FAST],
      total: fastBonus
    });
  }

  if (totalSlowAnswers) {
    bonuses.push({
      title: `Штраф за медлительность`,
      icon: `slow`,
      count: totalSlowAnswers,
      points: Points[AnswerValues.SLOW],
      total: slowBonus
    });
  }

  if (totalLivesRemained) {
    bonuses.push({
      title: `Бонус за жизни`,
      icon: `alive`,
      count: totalLivesRemained,
      points: Points.LIVES,
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
