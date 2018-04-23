import showScreen from '../showscreen';
import back from './back';
import GameView from './views/game-view';
import {TIME_TO_GAME, LEVELS_COUNT} from '../data/constants';
import Application from '../application';

export default class GameScreen {
  constructor(model) {
    this.model = model;
  }

  init(state, answers) {
    this.state = state;
    this.answers = answers;

    if (this.state.level < LEVELS_COUNT && this.state.lives >= 0) {
      const screen = new GameView(state, answers);
      this.state.timer.stop();
      this.state.timer.start(TIME_TO_GAME);

      showScreen(screen.element);
      back(screen.element, state);

      screen.onAnswerGiven = (questionType, correctAnswer, index) => {
        let isCorrectAnswer = false;
        let currentAnswers = ``;

        const levelTime = TIME_TO_GAME - this.state.timer.getTimer();

        if (questionType === `chooseType`) {
          const allAnswers = screen.element.querySelectorAll(`input[type="radio"]`);
          const answersChecked = screen.element.querySelectorAll(`input[type="radio"]:checked`);
          if (answersChecked.length === allAnswers.length / 2) {
            isCorrectAnswer = correctAnswer[0] === answersChecked[0].value && correctAnswer[1] === answersChecked[1].value;
            currentAnswers = this.model.addAnswer(this.answers, this.model.getAnswerValue(isCorrectAnswer, levelTime));
            Application.showGame(this.model.goToNextLevel(isCorrectAnswer), currentAnswers);
          }
        }

        if (questionType === `photoOrPic`) {
          const userAnswer = screen.element.querySelector(`input[type="radio"]:checked`);
          if (userAnswer) {
            isCorrectAnswer = userAnswer.value === correctAnswer;
            currentAnswers = this.model.addAnswer(this.answers, this.model.getAnswerValue(isCorrectAnswer, levelTime));
            Application.showGame(this.model.goToNextLevel(isCorrectAnswer), currentAnswers);
          }
        }

        if (questionType === `findPic`) {
          isCorrectAnswer = index === correctAnswer;
          currentAnswers = this.model.addAnswer(this.answers, this.model.getAnswerValue(isCorrectAnswer, levelTime));
          Application.showGame(this.model.goToNextLevel(isCorrectAnswer), currentAnswers);
        }
      };

      document.addEventListener(`timerStop`, () => {
        Application.showGame(this.model.goToNextLevel(false), this.model.addAnswer(this.answers, this.model.getAnswerValue(false)));
      });

    } else {
      this.state.timer.stop();
      this.state.timer.clear();
      Application.showStats(this.state, this.answers);
    }


  }
}
