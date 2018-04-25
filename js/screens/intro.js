import showScreen from '../showscreen';
import IntroView from './views/intro-view';
import Application from '../application';

export default class IntroScreen {
  init() {
    const screen = new IntroView();
    screen.onAsteriskClick = () => {
      Application.showGreeting();
    };
    showScreen(screen.element);
  }
}
