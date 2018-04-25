import AbstractView from './abstract-view';
import header from '../header';
import footer from '../footer';
import questions from '../../data/questions';
import {getGameStatsHtml} from '../stats-progress-bar';
import {QUESTION_ACTIONS} from '../../data/constants';

export default class GameView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
    const {askQuestion} = QUESTION_ACTIONS[questions[this.state.level].type];
    const task = questions[this.state.level].task;
    const images = questions[this.state.level].images;
    const width = questions[this.state.level].width;
    const height = questions[this.state.level].height;
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
    const questionType = questions[this.state.level].type;

    if (questionType === `chooseType` || questionType === `photoOrPic`) {
      const trigger = this._elem.querySelector(`.game__content`);
      trigger.addEventListener(`change`, () => {
        this.onAnswerGiven(questionType, questions[this.state.level].correctAnswer);
      });
    }

    if (questionType === `findPic`) {
      const triggers = this._elem.querySelectorAll(`.game__option`);
      Array.from(triggers).forEach((trigger, index) => {
        trigger.addEventListener(`click`, () => {
          this.onAnswerGiven(questionType, questions[this.state.level].correctAnswer[index], index);
        });
      });
    }

  }

  onAnswerGiven() {
  }
}
