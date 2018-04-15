export const LEVELS_COUNT = 10;
export const LIVES_COUNT = 3;
export const FAST_ANSWER = 9;
export const SLOW_ANSWER = 21;

export const QUESTION_TYPES = {
  chooseType: `chooseType`,
  findPic: `findPic`,
  photoOrPic: `photoOrPic`
}

export const QUESTION_TITLES = {
  [QUESTION_TYPES.chooseType]: `Угадайте для каждого изображения фото или рисунок?`,
  [QUESTION_TYPES.photoOrPic]: `Угадай, фото или рисунок?`,
  [QUESTION_TYPES.findPic]: `Найдите рисунок среди изображений`
}

export const ANSWER_TYPES = {
  photo: `photo`,
  paint: `paint`
}

export const ANSWER_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
}

export const TIME_TO_GAME = 30;
