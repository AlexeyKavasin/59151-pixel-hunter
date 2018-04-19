import showScreen from '../showscreen';
import back from './back';
import {setLevel, setLives} from '../data/game-state';
import questions from '../data/questions';
import {statsScreen} from './stats';
import {addAnswer, getAnswerValue} from '../data/answers';
import GameView from './views/game-view';
import {QUESTION_ACTIONS, LEVELS_COUNT, TIME_TO_GAME} from '../data/constants';

const gameScreen = (state, answers) => {
  const screen = new GameView(state, answers);
  const {addBehaviour} = QUESTION_ACTIONS[questions[state.level].type];

  state.timer.stop();
  state.timer.start(TIME_TO_GAME);

  const goToNextLevel = (isCorrectAnswer) => {
    const levelTime = TIME_TO_GAME - state.timer.getTimer();
    const nextLevel = state.level + 1;
    const currentAnswers = addAnswer(answers, getAnswerValue(isCorrectAnswer, levelTime));
    const currentState = !isCorrectAnswer ? setLives(state, state.lives - 1) : state;

    if (currentState.lives > 0 && nextLevel < LEVELS_COUNT) {
      return gameScreen(setLevel(currentState, nextLevel), currentAnswers);
    } else {
      state.timer.stop();
      state.timer.clear();
      return statsScreen(currentState, currentAnswers);
    }
  };

  addBehaviour(screen.element, goToNextLevel, questions[state.level].correctAnswer);

  back(screen.element, state);

  document.addEventListener(`timerStop`, () => {
    showScreen(goToNextLevel(false));
  });

  return screen.element;
};

export default gameScreen;
