import PopupView from './views/popup-view';
import Application from '../application';

export default class Popup {
  init(state) {
    const screen = new PopupView();
    const remainedTime = state.timer.getTimer();
    document.querySelector(`body`).appendChild(screen.element);
    state.timer.stop();

    screen.onYesClick = () => {
      state.timer.clear();
      screen.hidePopup();
      Application.showGreeting();
    };

    screen.onNoClick = () => {
      screen.hidePopup();
      state.timer.start(remainedTime);
    };
  }
}
