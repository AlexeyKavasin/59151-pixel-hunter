import {LEVELS_COUNT, LIVES_COUNT} from './constants';
import {setLevel, setTimer, setLives, defaultState} from './game-state';

export default class GameModel {
  constructor(data) {
    this.data = data;
  }

  update(state) {
    this.state = state;
    return this.state;
  }

  setLevel(state, level) {
    if (level < 0 || level > LEVELS_COUNT) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.level = level;
    this.update(this.state);
  }

  setLives(state, lives) {
    if (lives < 0 || lives > LIVES_COUNT) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.lives = lives;
    this.update(this.state);
  }

  setTimer(state, timer) {
    if (timer < 0) {
      return null;
    }
    this.state = Object.assign({}, state);
    this.state.timer = timer;
    this.update(this.state);
  }

  initStatCount() {
    this.gameStats = [];
  }

  addGameStats(stats) {
    this.gameStats.push(stats);
  }

  getGameStats() {
    return this.gameStats;
  }

}
