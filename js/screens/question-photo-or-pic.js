import showScreen from '../showscreen.js';

export function askQuestion(img) {
  return `
  <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${img}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
}

const questionsInputs = game2El.querySelectorAll(`.game__answer input`);
const backBtn = game2El.querySelector(`.back`);

backBtn.addEventListener(`click`, () => showScreen(introEl));
questionsInputs.forEach((q) => {
  q.addEventListener(`click`, () => {
    if (answerSelected(questionsInputs)) {
      showScreen(game3El);
    }
  });
});

export default game2El;
