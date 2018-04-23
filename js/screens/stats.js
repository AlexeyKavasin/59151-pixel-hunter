import showScreen from '../showscreen';
import StatsView from './views/stats-view';
import back from './back';

export default class StatsScreen {
  init(state, answers, previousStats) {
    const screen = new StatsView(state, answers, previousStats);
    back(screen.element, state);
    showScreen(screen.element);
  }
}
