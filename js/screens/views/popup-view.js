import AbstractView from './abstract-view';

export default class PopupView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="overlay"></div>
    <div class="popup">
    <h3 class="popup__heading">Игра будет потеряна. Продолжить?</h3>
    <button class="popup__button popup__button--yes">Ок</button>
    <button class="popup__button popup__button--no">Отмена</button>
    </div>
    `;
  }

  bind() {
    const yesBtn = this._elem.querySelector(`.popup__button--yes`);
    const noBtn = this._elem.querySelector(`.popup__button--no`);

    yesBtn.addEventListener(`click`, () => {
      this.onYesClick();
    });

    noBtn.addEventListener(`click`, () => {
      this.onNoClick();
    });
  }

  hidePopup() {
    this._elem.querySelector(`.popup`).classList.add(`hidden`);
    this._elem.querySelector(`.overlay`).classList.add(`hidden`);
  }

  showPopup() {
    this._elem.querySelector(`.popup`).classList.remove(`hidden`);
    this._elem.querySelector(`.overlay`).classlist.remove(`hidden`);
  }

  onYesClick() {
  }

  onNoClick() {

  }
}
