import AbstractView from './abstract-view';
import header from '../header';
import footer from '../footer';
import {getGameStatsHtml} from '../stats-progress-bar';
import {QuestionActions} from '../../data/constants';

export default class GameView extends AbstractView {
  constructor(state, answers, gameData) {
    super();
    this.state = state;
    this.answers = answers;
    this.gameData = gameData;
  }

  get template() {
    const {askQuestion} = QuestionActions[this.gameData[this.state.LEVEL].type];
    const task = this.gameData[this.state.LEVEL].task;
    const images = this.gameData[this.state.LEVEL].images;
    const width = this.gameData[this.state.LEVEL].width;
    const height = this.gameData[this.state.LEVEL].height;
    return `
    ${header(this.state)}
    <div class="game">
      <p class="game__task">${task}</p>
      ${askQuestion(images, width, height)}
      <div class="stats">
      ${getGameStatsHtml(this.answers)}
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const questionType = this.gameData[this.state.LEVEL].type;

    if (questionType === `two-of-two` || questionType === `tinder-like`) {
      const trigger = this._elem.querySelector(`.game__content`);
      const loadedAnswers = this.gameData[this.state.LEVEL].loadedAnswers;
      trigger.addEventListener(`change`, () => {
        this.onAnswerGiven(questionType, loadedAnswers);
      });
    }

    if (questionType === `one-of-three`) {
      const triggers = this._elem.querySelectorAll(`.game__option`);
      const loadedAnswers = this.gameData[this.state.LEVEL].loadedAnswers;
      Array.from(triggers).forEach((trigger, index) => {
        trigger.addEventListener(`click`, () => {
          this.onAnswerGiven(questionType, loadedAnswers, index);
        });
      });
    }

  }

  onAnswerGiven() {
  }
}
