import showScreen from '../showscreen';
import back from './back';
import gameScreen from './game';
import RulesView from './views/rules-view';

const rulesScreen = (state, answers) => {
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
    showScreen(gameScreen(state, answers));
  };

  back(screen.element, state);

  return screen.element;
};

export default rulesScreen;
