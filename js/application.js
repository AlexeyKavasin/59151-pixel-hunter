import GameModel from './data/game-model';
import IntroScreen from './screens/intro';
import GreetingScreen from './screens/greeting';
import RulesScreen from './screens/rules';
import GameScreen from './screens/game';
import StatsScreen from './screens/stats';

export default class Application {

  static showIntro() {
    const model = new GameModel();
    const intro = new IntroScreen(model);
    intro.init();
  }

  static showGreeting(state, answers) {
    const greeting = new GreetingScreen(state, answers);
    greeting.init(state, answers);
  }

  static showRules(state, answers) {
    const rules = new RulesScreen(state, answers);
    rules.init(state, answers);
  }

  static showGame(state, answers) {
    const model = new GameModel(state, answers);
    const game = new GameScreen(model);
    game.init(state, answers);
  }

  static showStats(state, answers) {
    const stats = new StatsScreen(state, answers);
    stats.init(state, answers);
  }
}
