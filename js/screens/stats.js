import showScreen from '../showscreen';
import StatsView from './views/stats-view';
import back from './back';
import Loader from '../loader';
import {calculateStats} from '../data/stats-count';

export default class StatsScreen {
  init(state, answers) {
    this.state = state;
    this.answers = answers;
    const currentStats = calculateStats(this.state, this.answers);
    const loader = new Loader();
    loader.uploadStats(currentStats, this.state.userName)
        .then(() => loader.loadStats(this.state.userName))
        .then((loadedStats) => {
          const screen = new StatsView(state, answers, loadedStats);
          back(screen.element, state);
          showScreen(screen.element);
        });
  }
}
