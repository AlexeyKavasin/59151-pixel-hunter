import {LEVELS_COUNT, LIVES_COUNT} from '../constants.js'

export const gameState = Object.freeze({
  level: 0,
  lives: LIVES_COUNT,
  timer: null
});

export const setLevel = (currentState, level) => {
  if (level < 0 || level > LEVELS_COUNT) {
    return null;
  }
  const newState = Object.assign({}, currentState);
  newState.level = level;
  return newState;
}

export const setLives = (currentState, lives) => {
  if (lives < 0 || lives > LIVES_COUNT) {
    return null;
  }
  const newState = Object.assign({}, currentState);
  newState.lives = lives;
  return newState;
}

export const setTimer = (currentState, timer) => {
  if (timer < 0) {
    return null;
  }
  const newState = Object.assign({}, currentState);
  newState.timer = timer;
  return newState;
}
