import showScreen from '../showscreen.js';

export const askQuestion = (img1, img2) => {
  return `
  <form class="game__content">
      <div class="game__option">
        <img src="${img1}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
         <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${img2}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
         <input name="question2" type="radio" value="photo">
         <span>Фото</span>
       </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
};

export const addBehaviour = (el, nextLevel, correctAnswer) => {
  const form = el.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    const answersChecked = form.querySelectorAll(`input[type="radio"]:checked`);
    if (answersChecked.length === 2) {
      const isCorrectAnswer = correctAnswer[0] === answersChecked[0].value && correctAnswer[1] === answersChecked[1].value;
      showScreen(nextLevel(isCorrectAnswer));
    }
  });
};
