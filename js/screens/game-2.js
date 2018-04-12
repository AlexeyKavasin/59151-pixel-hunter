import getElFromTemplate from '../getelfromtemplate.js';
import showScreen from '../showscreen.js';
import answerSelected from '../answerselected.js';
import introEl from './intro.js';
import gameHeader from './gameheader.js';
import {questionsData, progress} from '../data/game-data.js';
import game3El from './game-3.js';
import footer from './footer.js';

const gameContent = (data) =>
  `<p class="game__task">${data.task}</p>
   <form class="game__content game__content--wide">
     ${[...data.options].map((option, ind) =>
    `<div class="game__option">
      <img src="${option.img}" alt="Option ${ind + 1}" width="100%" height="auto">
      <label class="game__answer game__answer--photo">
        <input name="question${ind + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${ind + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`).join(``)}
  </form>`;

const game2El = getElFromTemplate(`
  ${gameHeader}
  <div class="game">
    ${gameContent(questionsData[`question-1`])}
    <div class="stats">
      <ul class="stats">
        ${progress.map((p) => `<li class="stats__result stats__result--${p}"></li>`).join(``)}
      </ul>
    </div>
  </div>
  ${footer}
`);

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
