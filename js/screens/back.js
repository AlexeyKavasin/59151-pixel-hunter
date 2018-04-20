import showScreen from '../showscreen';
import introScreen from './intro';

const back = (parent, state) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    state.timer.stop();
    state.timer.clear();
    showScreen(introScreen());
  });
};

export default back;
