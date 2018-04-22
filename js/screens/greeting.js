import showScreen from '../showscreen';
import GreetingView from './views/greeting-view';
import Application from '../application';

export default class GreetingScreen {
  init(state, answers) {
    const screen = new GreetingView(state, answers);
    screen.onGreetingContinueClick = () => {
      Application.showRules(state, answers);
    }
    showScreen(screen.element);
  }

  // const screen = new GreetingView();
  //
  // screen.onGreetingContinueClick = () => {
  //   showScreen(rulesScreen(state, answers));
  // };
  //
  // return screen.element;
}
