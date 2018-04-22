import showScreen from '../showscreen';
import {defaultState, setTimer} from '../data/game-state';
import {timer} from '../timer';
import handleTimer from '../timer-handler';
import {answers} from '../data/answers';
import IntroView from './views/intro-view';
import Application from '../application';

export default class IntroScreen {
  init() {
    const screen = new IntroView();
    screen.onAsteriskClick = () => {
      Application.showGreeting(setTimer(defaultState, timer()), answers);
      handleTimer();
    };
    showScreen(screen.element);
  }
};
