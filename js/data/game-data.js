const gameState = Object.freeze({
  time: 30,
  lives: 3,
  question: `question-0`
});

const questionsData = {
  'question-0': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/468x458`,
            correct: `paint`
          },
        ]
    )
  },
  'question-1': {
    task: `Угадай, фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/705x455`,
            correct: `photo`
          }
        ]
    )
  },
  'question-2': {
    task: `Найдите рисунок среди изображений`,
    options: new Set(
        [
          {
            img: `http://placehold.it/304x455`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/304x455`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/304x455`,
            correct: `photo`
          }
        ]
    )
  },
  'question-3': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/468x458`,
            correct: `paint`
          },
        ]
    )
  },
  'question-4': {
    task: `Угадай, фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/705x455`,
            correct: `photo`
          }
        ]
    )
  },
  'question-5': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/468x458`,
            correct: `paint`
          },
        ]
    )
  },
  'question-6': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/468x458`,
            correct: `paint`
          },
        ]
    )
  },
  'question-7': {
    task: `Угадай, фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/705x455`,
            correct: `photo`
          }
        ]
    )
  },
  'question-8': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            correct: `photo`
          },
          {
            img: `http://placehold.it/468x458`,
            correct: `paint`
          },
        ]
    )
  }
};

const progress = [`unknown`];

export {gameState, questionsData, progress};
