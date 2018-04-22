import GameModel from './data/game-model';
import IntroScreen from './screens/intro';
import GreetingScreen from './screens/greeting';
import RulesScreen from './screens/rules';

export default class Application {

  static showIntro() {
    const intro = new IntroScreen();
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
    const model = new GameModel();
    const game = new GameScreen(model);
    game.init(state, answers);
  }

  static showStats(model) {
    const stats = new StatsScreen(model);
    stats.init();
  }
}
