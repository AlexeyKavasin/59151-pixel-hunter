import showScreen from '../showscreen';
import rulesScreen from './rules';
import GreetingView from './views/greeting-view';

const greetingScreen = (state, answers) => {
  const screen = new GreetingView();

  screen.onGreetingContinueClick = () => {
    showScreen(rulesScreen(state, answers));
  };

  return screen.element;
};

export default greetingScreen;
