import showScreen from '../showscreen';

export const askQuestion = (imgs) => {
  return `
    <form class="game__content  game__content--triple">
  ${imgs.map((img) => {
    return `
    <div class="game__option">
      <img src="${img}" alt="Option 1" width="304" height="455">
    </div>`;
  }).join(``)}
    </form>`;
};

export const addBehaviour = (el, nextLevel, correctAnswer) => {
  const formOptions = el.querySelectorAll(`.game__option`);
  Array.from(formOptions).forEach((option, ind) => {
    option.addEventListener(`click`, () => {
      const isCorrectAnswer = ind === correctAnswer;
      showScreen(nextLevel(isCorrectAnswer));
    });
  });
};
