import showScreen from '../showscreen.js';
import introEl from './intro.js';

const back = (parent, state) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    showScreen(introEl());
  })
}

export default back;
