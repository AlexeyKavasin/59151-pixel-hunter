import {assert} from 'chai';
import {countResults} from './countresults.js';

describe(`countResults function testing`, () => {
  it(`should fail if less than 10 answers given`, () => {
    let answersArr = [];
    let answer = {answered: true, time: 10};
    for (let i = 0; i < 9; i++) {
      answersArr.push(answer);
    }
    assert.equal(countResults(answersArr, 3), -1);
  });
  it(`should fail if no lives remain`, () => {
    let answersArr = [];
    let answer = {answered: true, time: 10};
    for (let i = 0; i < 10; i++) {
      answersArr.push(answer);
    }
    assert.equal(countResults(answersArr, 0), -1);
  });
  it(`should fail if some data is incorrect`, () => {
    assert.equal(countResults(``, ``), -1);
    assert.equal(countResults(``, 3), -1);
    assert.equal(countResults(true, ``), -1);
    assert.equal(countResults(true, true), -1);
    assert.equal(countResults(null, null), -1);
    assert.equal(countResults([], null), -1);
    assert.equal(countResults({}, {}), -1);
  });
  it(`should return 1150 if no speed bonus and 3 lives`, () => {
    let answersArr = [];
    let answer = {answered: true, time: 10};
    for (let i = 0; i < 10; i++) {
      answersArr.push(answer);
    }
    assert.equal(countResults(answersArr, 3), 1150);
  });
});
