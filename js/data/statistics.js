import {LEVELS_COUNT, ANSWER_VALUES} from '../constants.js';

export const calculateStats = (state, answers) => {
  if (answers.length < LEVELS_COUNT) {
    return {
      answers,
      totalPoints,
      totalResult: {
        success: false;
      }
    };
  }
}
