import {LIVES_COUNT} from './constants';

export const defaultState = Object.freeze({
  userName: ``,
  level: 0,
  lives: LIVES_COUNT,
  timer: null
});
