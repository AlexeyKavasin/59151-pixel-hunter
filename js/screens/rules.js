import getElFromTemplate from '../getelfromtemplate.js';
import showScreen from '../showscreen.js';
import introEl from './intro.js';
import gameEl from './game.js';
import footer from './footer.js';
import {LEVELS_COUNT, TIME_TO_GAME, LIVES_COUNT} from '../constants.js'

const rulesDescription = `
  <p class="rules__description">Угадай ${LEVELS_COUNT} раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится ${TIME_TO_GAME} секунд.<br>
    Ошибиться можно не более ${LIVES_COUNT} раз.<br>
    <br>
    Готовы?
  </p>`;

const rulesEl = (state, answers) => {
  const el = getElFromTemplate(`
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      ${rulesDescription}
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`);

    const form = el.querySelector(`.rules__form`);
    const submitBtn = form.querySelector(`.rules__button`);
    const nameInput = form.querySelector(`.rules__input`);
    const isEmpty = (val) => val.length === 0;

    nameInput.addEventListener(`input`, ({target}) => {
      if (!isEmpty(target.value.trim())) {
        submitBtn.removeAttribute(`disabled`);
      } else {
        submitBtn.setAttribute(`disabled`, `disabled`);
      }
    });

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      showScreen(gameEl(state, answers));
    })

    return el;
}

export default rulesEl;
