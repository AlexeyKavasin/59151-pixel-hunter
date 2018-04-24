import showScreen from '../showscreen';
import {defaultState} from '../data/game-state';
import {timer} from '../timer';
import handleTimer from '../timer-handler';
import {answers} from '../data/constants';
import IntroView from './views/intro-view';
import Application from '../application';

export default class IntroScreen {
  constructor(model) {
    this.model = model;
  }
  init() {
    const screen = new IntroView();
    screen.onAsteriskClick = () => {
      Application.showGreeting(this.model.setTimer(defaultState, timer()), answers);
      handleTimer();
    };
    showScreen(screen.element);
  }
}
