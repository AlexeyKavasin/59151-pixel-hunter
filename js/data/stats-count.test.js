import {assert} from 'chai';
import {calculateStats} from './stats-count.js';
import {Points, AnswerValues} from './constants';

describe(`calculateStats function testing`, () => {
  it(`should be false in totalResult if answers are fewer than levels`, () => {
    let answers = [`correct`, `correct`, `wrong`, `slow`, `correct`, `wrong`, `wrong`, `slow`];
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 3,
      TIMER: null
    };
    assert.equal(calculateStats(State, answers).totalResult.success, false);
  });
  it(`should be true in totalResult if all levels passed and lives remain`, () => {
    let answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `slow`, `fast`, `fast`];
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 3,
      TIMER: null
    };
    assert.equal(calculateStats(State, answers).totalResult.success, true);
  });
  it(`should count lives bonus correctly`, () => {
    let answers = [`correct`, `correct`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 3,
      TIMER: null
    };
    assert.equal(calculateStats(State, answers).bonuses[2].total, Points.LIVES * State.LIVES);
  });
  it(`should count fast bonus correctly`, () => {
    let answers = [`fast`, `fast`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let fastAnswers = 3;
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 3,
      TIMER: null
    };
    assert.equal(calculateStats(State, answers).bonuses[0].total, Points[AnswerValues.FAST] * fastAnswers);
  });
  it(`should count slow bonus correctly`, () => {
    let answers = [`fast`, `fast`, `correct`, `fast`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    let slowAnswers = 2;
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 3,
      TIMER: null
    };
    assert.equal(calculateStats(State, answers).bonuses[1].total, Points[AnswerValues.SLOW] * slowAnswers);
  });
  it(`should count score correctly`, () => {
    let answers = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`, `fast`, `fast`, `slow`];
    let State = {
      USERNAME: `qwerty`,
      LEVEL: 0,
      LIVES: 2,
      TIMER: null
    };
    let totalCorrect = answers.filter((answer) => answer !== AnswerValues.WRONG).length * Points[AnswerValues.CORRECT];
    let totalSlow = answers.filter((answer) => answer === AnswerValues.SLOW).length * Points[AnswerValues.SLOW];
    let totalFast = answers.filter((answer) => answer === AnswerValues.FAST).length * Points[AnswerValues.FAST];
    let totalLives = State.LIVES * Points.LIVES;
    let score = totalCorrect + totalSlow + totalFast + totalLives;
    assert.equal(calculateStats(State, answers).totalResult.score, score);
  });
});
