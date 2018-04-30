import PopupView from './views/popup-view';
import Application from '../application';

export default class Popup {
  init(state) {
    const screen = new PopupView();
    const remainedTime = state.TIMER.getTimer();
    document.querySelector(`body`).appendChild(screen.element);
    state.TIMER.stop();

    screen.onYesClick = () => {
      state.TIMER.clear();
      screen.hidePopup();
      Application.showGreeting();
    };

    screen.onNoClick = () => {
      screen.hidePopup();
      state.TIMER.start(remainedTime);
    };
  }
}
