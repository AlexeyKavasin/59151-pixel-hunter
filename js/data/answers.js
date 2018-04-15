import {ANSWER_VALUES} from '../constants.js';

export const answers = [];

export const addAnswer = (currentAnswers, answer) => {
  return [...currentAnswers, answer];
}

export const getAnswerValue = (isCorrectAnswer) => {
  return isCorrectAnswer ? ANSWER_VALUES.correct : ANSWER_VALUES.wrong;
}
