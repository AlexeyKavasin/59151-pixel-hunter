import {LEVELS_COUNT, LIVES_COUNT, AnswerValues, FAST_ANSWER, SLOW_ANSWER} from './constants';

export default class GameModel {
  constructor(state, answers) {
    this.state = state;
    this.answers = answers;
  }

  setLevel(state, level) {
    if (level < 0 || level > LEVELS_COUNT) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.LEVEL = level;
    return this.state;
  }

  setLives(state, lives) {
    if (lives > LIVES_COUNT) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.LIVES = lives;
    return this.state;
  }

  setTimer(state, timer) {
    if (timer < 0) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.TIMER = timer;
    return this.state;
  }

  addAnswer(currentAnswers, answer) {
    return [...currentAnswers, answer];
  }

  getAnswerValue(isCorrectAnswer, levelTime) {
    if (!isCorrectAnswer) {
      return AnswerValues.WRONG;
    }
    if (levelTime <= FAST_ANSWER) {
      return AnswerValues.FAST;
    }
    return levelTime >= SLOW_ANSWER ? AnswerValues.SLOW : AnswerValues.CORRECT;
  }

  goToNextLevel(isCorrectAnswer) {
    const nextLevel = this.state.LEVEL + 1;
    const currentState = !isCorrectAnswer ? this.setLives(this.state, this.state.LIVES - 1) : this.state;
    return this.setLevel(currentState, nextLevel);
  }

}
