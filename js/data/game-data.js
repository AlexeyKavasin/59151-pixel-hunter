const gameState = {
  time: 30,
  lives: 3,
  question: `question-0`
};

const questionsData = {
  'question-0': {
    task: `Угадайте для каждого изображения фото или рисунок?`,
    options: new Set(
        [
          {
            img: `http://placehold.it/468x458`,
            variants: {
              photo: `question-1`,
              paint: null
            }
          },
          {
            img: `http://placehold.it/468x458`,
            variants: {
              photo: null,
              paint: `question-1`
            }
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
            variants: {
              photo: null,
              paint: `question-2`
            }
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
            variants: {
              photo: null,
              paint: `question-3`
            }
          },
          {
            img: `http://placehold.it/304x455`,
            variants: {
              photo: null,
              paint: `question-3`
            }
          },
          {
            img: `http://placehold.it/304x455`,
            variants: {
              photo: null,
              paint: `question-3`
            }
          }
        ]
    )
  }
};

const progress = [`unknown`];

export {gameState, questionsData, progress};
