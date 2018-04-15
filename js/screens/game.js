import getElFromTemplate from '../getelfromtemplate.js';
import showScreen from '../showscreen.js';
import gameHeader from './gameheader.js';
import footer from './footer.js';
import {setLevel, setLives} from '../data/game-state.js';
import questions from '../data/questions.js';
import {addAnswer, getAnswerValue} from '../data/answers.js';
import * as questionChooseType from './question-choose-type.js';
import * as questionFindPic from './question-find-pic.js';
import * as questionPhotoOrPic from './question-photo-or-pic.js';
import {QUESTION_TITLES, QUESTION_TYPES, LEVELS_COUNT, TIME_TO_GAME} from '../constants.js';

const QUESTION_ACTIONS = {
  [QUESTION_TYPES.chooseType]: questionChooseType,
  [QUESTION_TYPES.findPic]: questionFindPic,
  [QUESTION_TYPES.photoOrPic]: questionPhotoOrPic
}

const gameEl = (state, answers) => {
  const {level, timer, lives} = state;
  const {askQuestion, addBehaviour} = QUESTION_ACTIONS[questions[level].type];

  const goToNextLevel = (isCorrectAnswer) => {
    const nextLevel = level + 1;
    const currentAnswers = addAnswer(answers, getAnswerValue(isCorrectAnswer));
    const currentState = !isCorrectAnswer ? setLives(state, state.lives - 1) : state;

    if (currentState.lives > 0 && nextLevel < LEVELS_COUNT) {
      return gameEl(setLevel(currentState, nextLevel), currentAnswers);
    } else {
      return statsEl(currentState, currentAnswers);
    }
  }

  const el = getElFromTemplate(`
    ${gameHeader(TIME_TO_GAME, lives)}
    <div class="game">
      <p class="game__task">${QUESTION_TITLES[questions[level].type]}</p>
      ${askQuestion(...questions[level].images)}
      <div class="stats">
      </div>
    </div>
    `);

  addBehaviour(el, goToNextLevel, questions[level].correctAnswer, answers);

  return el;
}

export default gameEl;
