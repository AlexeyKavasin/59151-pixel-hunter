import * as QuestionChooseType from '../screens/question-choose-type';
import * as QuestionfindUnique from '../screens/question-find-pic';
import * as QuestionPhotoOrPic from '../screens/question-photo-or-pic';

export const LEVELS_COUNT = 10;
export const LIVES_COUNT = 3;
export const FAST_ANSWER = 9;
export const SLOW_ANSWER = 21;
export const TIME_TO_GAME = 30;
export const answers = [];

export const QuestionTypes = {
  CHOOSETYPE: `two-of-two`,
  FINDUNIQUE: `one-of-three`,
  PHOTOORPIC: `tinder-like`
};

export const QuestionActions = {
  [QuestionTypes.CHOOSETYPE]: QuestionChooseType,
  [QuestionTypes.FINDUNIQUE]: QuestionfindUnique,
  [QuestionTypes.PHOTOORPIC]: QuestionPhotoOrPic
};

export const AnswerValues = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

export const Points = {
  [AnswerValues.CORRECT]: 100,
  [AnswerValues.WRONG]: 0,
  [AnswerValues.FAST]: 50,
  [AnswerValues.SLOW]: -50,
  LIVES: 50
};
