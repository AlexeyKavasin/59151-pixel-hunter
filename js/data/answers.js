import {ANSWER_VALUES, FAST_ANSWER, SLOW_ANSWER} from '../constants.js';

export const answers = [];

export const addAnswer = (currentAnswers, answer) => {
  return [...currentAnswers, answer];
}

export const getAnswerValue = (isCorrectAnswer, levelTime) => {
  if (!isCorrectAnswer) {
    return ANSWER_VALUES.wrong;
  }
  if (levelTime <= FAST_ANSWER) {
    return ANSWER_VALUES.fast;
  }
  return levelTime >= SLOW_ANSWER ? ANSWER_VALUES.slow : ANSWER_VALUES.correct;
}
