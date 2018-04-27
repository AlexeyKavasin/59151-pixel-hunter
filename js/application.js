import GameModel from './data/game-model';
import IntroScreen from './screens/intro';
import GreetingScreen from './screens/greeting';
import RulesScreen from './screens/rules';
import GameScreen from './screens/game';
import StatsScreen from './screens/stats';
import Loader from './loader';
import {trimQuestionsData} from "./questions-data-trimmer";

let gameData;

export default class Application {

  static showIntro() {
    const loader = new Loader();
    const intro = new IntroScreen();
    intro.init();
    loader.loadData(`https://es.dump.academy/pixel-hunter/questions`)
        .then((data) => {
          gameData = trimQuestionsData(data);
        })
        .then(Application.showGreeting)
        .catch(loader.showError);
  }

  static showGreeting() {
    const model = new GameModel();
    const greeting = new GreetingScreen(model);
    greeting.init();
  }

  static showRules(state, answers) {
    const rules = new RulesScreen(state, answers);
    rules.init(state, answers);
  }

  static showGame(state, answers) {
    const model = new GameModel(state, answers);
    const game = new GameScreen(model);
    game.init(state, answers, gameData);
  }

  static showStats(state, answers) {
    const stats = new StatsScreen(state, answers);
    stats.init(state, answers);
  }
}
