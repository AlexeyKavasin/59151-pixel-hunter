import {assert} from 'chai';
import {calculateStats} from './stats-count.js';
import {POINTS, ANSWER_VALUES} from './constants';

describe(`calculateStats function testing`, () => {
  it(`should be false in totalResult if answers are fewer than levels`, () => {
    let answers = [`correct`, `correct`, `wrong`, `slow`, `correct`, `wrong`, `wrong`, `slow`];
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 3,
      timer: null
    };
    assert.equal(calculateStats(state, answers).totalResult.success, false);
  });
  it(`should be true in totalResult if all levels passed and lives remain`, () => {
    let answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `slow`, `fast`, `fast`];
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 3,
      timer: null
    };
    assert.equal(calculateStats(state, answers).totalResult.success, true);
  });
  it(`should count lives bonus correctly`, () => {
    let answers = [`correct`, `correct`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 3,
      timer: null
    };
    assert.equal(calculateStats(state, answers).bonuses[2].total, POINTS.lives * state.lives);
  });
  it(`should count fast bonus correctly`, () => {
    let answers = [`fast`, `fast`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let fastAnswers = 3;
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 3,
      timer: null
    };
    assert.equal(calculateStats(state, answers).bonuses[0].total, POINTS[ANSWER_VALUES.fast] * fastAnswers);
  });
  it(`should count slow bonus correctly`, () => {
    let answers = [`fast`, `fast`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let slowAnswers = 2;
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 3,
      timer: null
    };
    assert.equal(calculateStats(state, answers).bonuses[1].total, POINTS[ANSWER_VALUES.slow] * slowAnswers);
  });
  it(`should count score correctly`, () => {
    let answers = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`, `fast`, `fast`, `slow`];
    let state = {
      userName: `qwerty`,
      level: 0,
      lives: 2,
      timer: null
    };
    let totalCorrect = answers.filter((answer) => answer !== ANSWER_VALUES.wrong).length * POINTS[ANSWER_VALUES.correct];
    let totalSlow = answers.filter((answer) => answer === ANSWER_VALUES.slow).length * POINTS[ANSWER_VALUES.slow];
    let totalFast = answers.filter((answer) => answer === ANSWER_VALUES.fast).length * POINTS[ANSWER_VALUES.fast];
    let totalLives = state.lives * POINTS.lives;
    let score = totalCorrect + totalSlow + totalFast + totalLives;
    assert.equal(calculateStats(state, answers).totalResult.score, score);
  });
});
