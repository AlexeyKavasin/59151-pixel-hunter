import getElFromTemplate from '../getelfromtemplate.js';
import showScreen from '../showscreen.js';
import introEl from './intro.js';
import gameHeader from './gameheader.js';
import {questionsData, progress} from '../data/game-data.js';
import statsEl from './stats.js';
import footer from './footer.js';

const gameContent = (data) =>
  `<p class="game__task">${data.task}</p>
  <form class="game__content  game__content--triple">
     ${[...data.options].map((option, ind) =>
    `<div class="game__option">
      <img src="${option.img}" alt="Option ${ind + 1}" width="304" height="455">
    </div>`).join(``)}
  </form>`;

const game3El = getElFromTemplate(`
  ${gameHeader}
  <div class="game">
    ${gameContent(questionsData[`question-2`])}
    <div class="stats">
      <ul class="stats">
        ${progress.map((p) => `<li class="stats__result stats__result--${p}"></li>`).join(``)}
      </ul>
    </div>
  </div>
  ${footer}
`);

const options = game3El.querySelectorAll(`.game__option`);
const backBtn = game3El.querySelector(`.back`);

backBtn.addEventListener(`click`, () => showScreen(introEl));
options.forEach((o) => {
  o.addEventListener(`click`, () => showScreen(statsEl));
});

export default game3El;
