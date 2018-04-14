import showScreen from '../showscreen.js';

export function askQuestion(img1, img2) {
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
}

const questionsInputs = game1El.querySelectorAll(`.game__answer input`);
const backBtn = game1El.querySelector(`.back`);

backBtn.addEventListener(`click`, () => showScreen(introEl));
questionsInputs.forEach((q) => {
  q.addEventListener(`click`, () => {
    if (answerSelected(questionsInputs)) {
      showScreen(game2El);
    }
  });
});

export default game1El;
