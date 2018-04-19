import AbstractView from './abstract-view';
import header from '../header';
import footer from '../footer';
import questions from '../../data/questions';
import {gameStatsHtml} from '../stats-progress-bar';
import {QUESTION_TITLES, QUESTION_ACTIONS} from '../../data/constants';

export default class GameView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
    const {askQuestion} = QUESTION_ACTIONS[questions[this.state.level].type];

    return `
    ${header(this.state)}
    <div class="game">
      <p class="game__task">${QUESTION_TITLES[questions[this.state.level].type]}</p>
      ${askQuestion(questions[this.state.level].images)}
      <div class="stats">
      ${gameStatsHtml(this.answers)}
      </div>
    </div>
    ${footer}`;
  }

  bind() {
  }
}
