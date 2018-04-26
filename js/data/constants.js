import * as questionChooseType from '../screens/question-choose-type';
import * as questionfindUnique from '../screens/question-find-pic';
import * as questionPhotoOrPic from '../screens/question-photo-or-pic';

export const LEVELS_COUNT = 10;
export const LIVES_COUNT = 3;
export const FAST_ANSWER = 9;
export const SLOW_ANSWER = 21;
export const TIME_TO_GAME = 30;
export const answers = [];

export const QUESTION_TYPES = {
  chooseType: `two-of-two`,
  findUnique: `one-of-three`,
  photoOrPic: `tinder-like`
};

export const QUESTION_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findUnique]: questionfindUnique,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
};

export const ANSWER_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
};

export const POINTS = {
  [ANSWER_VALUES.correct]: 100,
  [ANSWER_VALUES.wrong]: 0,
  [ANSWER_VALUES.fast]: 50,
  [ANSWER_VALUES.slow]: -50,
  lives: 50
};
