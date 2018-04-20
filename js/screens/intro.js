import showScreen from '../showscreen';
import greetingScreen from './greeting';
import {gameState, setTimer} from '../data/game-state';
import {timer} from '../timer';
import handleTimer from '../timer-handler';
import {answers} from '../data/answers';
import IntroView from './views/intro-view';

const introScreen = () => {
  const screen = new IntroView();

  screen.onAsteriskClick = () => {
    const initState = setTimer(gameState, timer());
    showScreen(greetingScreen(initState, answers));
  };

  handleTimer();

  return screen.element;
};

export default introScreen;
