import AbstractView from './abstract-view';
import footer from '../footer';
import header from '../header';
import {LEVELS_COUNT, TIME_TO_GAME, LIVES_COUNT} from '../../data/constants';

export default class RulesView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
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

    return `
    ${header(this.state)}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      ${rulesDescription}
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`;
  }

  bind() {
    const form = this._elem.querySelector(`.rules__form`);

    form.onsubmit = (evt) => {
      evt.preventDefault();
      this.onRulesFormSubmit();
    };
  }

  onRulesFormSubmit() {

  }

  onBackBtnClick() {

  }
}
