import {LEVELS_COUNT, LIVES_COUNT, ANSWER_VALUES, FAST_ANSWER, SLOW_ANSWER} from './constants';

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
    this.state.level = level;
    return this.state;
  }

  setLives(state, lives) {
    if (lives < 0 || lives > LIVES_COUNT) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.lives = lives;
    return this.state;
  }

  setTimer(state, timer) {
    if (timer < 0) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.timer = timer;
    return this.state;
  }

  addAnswer(currentAnswers, answer) {
    return [...currentAnswers, answer];
  }

  getAnswerValue(isCorrectAnswer, levelTime) {
    if (!isCorrectAnswer) {
      return ANSWER_VALUES.wrong;
    }
    if (levelTime <= FAST_ANSWER) {
      return ANSWER_VALUES.fast;
    }
    return levelTime >= SLOW_ANSWER ? ANSWER_VALUES.slow : ANSWER_VALUES.correct;
  }

  goToNextLevel(isCorrectAnswer) {
    const nextLevel = this.state.level + 1;
    const currentState = !isCorrectAnswer ? this.setLives(this.state, this.state.lives - 1) : this.state;
    return this.setLevel(currentState, nextLevel);
  }

}
