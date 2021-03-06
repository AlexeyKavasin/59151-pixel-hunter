import Application from '../application';
import Popup from './popup';

const back = (parent, state, gameIsOn) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    if (gameIsOn) {
      const popup = new Popup();
      popup.init(state);
    } else {
      state.TIMER.stop();
      state.TIMER.clear();
      Application.showGreeting();
    }
  });
};

export default back;
