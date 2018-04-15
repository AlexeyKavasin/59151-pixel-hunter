import showScreen from '../showscreen.js';

export const askQuestion = (img1, img2, img3) => {
  return `
    <form class="game__content  game__content--triple">
       <div class="game__option">
        <img src="${img1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${img2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${img3}" alt="Option 1" width="304" height="455">
      </div>
    </form>`;
}

export const addBehaviour = (el, nextLevel, correctAnswer, answers) => {
  const formOptions = el.querySelectorAll(`.game__option`);
  Array.from(formOptions, (option, ind) => {
    option.addEventListener(`click`, () => {
      const isCorrectAnswer = index === correctAnswer;
      showScreen(nextLevel(isCorrectAnswer));
    });
  });
}
