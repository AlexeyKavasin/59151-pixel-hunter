import showScreen from '../showscreen';
import back from './back';
import {setLevel, setLives} from '../data/game-state';
import {statsScreen} from './stats';
import {addAnswer, getAnswerValue} from '../data/answers';
import GameView from './views/game-view';
import {LEVELS_COUNT, TIME_TO_GAME} from '../data/constants';
import Application from '../application';

const gameScreen = (state, answers) => {
  const screen = new GameView(state, answers);

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

  screen.onAnswerGiven = (questionType, correctAnswer, index) => {
    let isCorrectAnswer = false;

    if (questionType === `chooseType`) {
      const allAnswers = screen.element.querySelectorAll(`input[type="radio"]`);
      const answersChecked = screen.element.querySelectorAll(`input[type="radio"]:checked`);
      if (answersChecked.length === allAnswers.length / 2) {
        isCorrectAnswer = correctAnswer[0] === answersChecked[0].value && correctAnswer[1] === answersChecked[1].value;
        showScreen(goToNextLevel(isCorrectAnswer));
      }
    }

    if (questionType === `photoOrPic`) {
      const userAnswer = screen.element.querySelector(`input[type="radio"]:checked`);
      if (userAnswer) {
        isCorrectAnswer = userAnswer.value === correctAnswer;
        showScreen(goToNextLevel(isCorrectAnswer));
      }
    }

    if (questionType === `findPic`) {
      isCorrectAnswer = index === correctAnswer;
      showScreen(goToNextLevel(isCorrectAnswer));
    }

  };

  back(screen.element, state);

  document.addEventListener(`timerStop`, () => {
    showScreen(goToNextLevel(false));
  });

  return screen.element;
};

export default gameScreen;
