import showScreen from '../showscreen';
import back from './back';
import RulesView from './views/rules-view';
import Application from '../application';

export default class rulesScreen {
  init(state, answers) {
    const screen = new RulesView(state, answers);
    const submitBtn = screen.element.querySelector(`.rules__button`);
    const nameInput = screen.element.querySelector(`.rules__input`);

    nameInput.addEventListener(`input`, ({target}) => {
      if (target.value.trim().length > 0) {
        submitBtn.removeAttribute(`disabled`);
      } else {
        submitBtn.setAttribute(`disabled`, `disabled`);
      }
    });

    screen.onRulesFormSubmit = () => {
      Application.showGame(state, answers);
    }

    showScreen(screen.element);

    back(screen.element, state);
  }
}
