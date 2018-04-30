import showScreen from '../showscreen';
import GreetingView from './views/greeting-view';
import Application from '../application';
import {DefaultState} from '../data/game-state';
import {timer} from '../timer';
import handleTimer from '../timer-handler';
import {answers} from '../data/constants';

export default class GreetingScreen {
  constructor(model) {
    this.model = model;
  }
  init() {
    const screen = new GreetingView();
    screen.onGreetingContinueClick = () => {
      Application.showRules(this.model.setTimer(DefaultState, timer()), answers);
      handleTimer();
    };
    showScreen(screen.element);
  }
}
