import {assert} from 'chai';
import {countResults} from './countresults.js';

describe(`countResults function testing`, () => {
  it(`should fail if less than 10 answers given`, () => {
    let answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `correct`, `slow`];
    assert.equal(countResults(answers, 3), -1);
  });
  it(`should fail if no lives remain`, () => {
    let answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `correct`, `slow`, `slow`];
    assert.equal(countResults(answers, 0), -1);
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
  it(`should return 1150 if all correct and 3 lives left`, () => {
    let answers = [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`];
    assert.equal(countResults(answers, 3), 1150);
  });
  it(`should return 850 if 4 correct, 2 wrong, 2 fast, 2 slow and 1 live left`, () => {
    let answers = [`fast`, `fast`, `slow`, `slow`, `wrong`, `wrong`, `correct`, `correct`, `correct`, `correct`];
    assert.equal(countResults(answers, 1), 850);
  });
  it(`should return 1050 if 7 correct, 1 fast, 2 slow and 2 lives left`, () => {
    let answers = [`correct`, `correct`, `correct`, `slow`, `correct`, `correct`, `correct`, `correct`, `slow`, `fast`];
    assert.equal(countResults(answers, 2), 1050);
  });
  it(`should return 1050 if 8 correct, 1 wrong, 1 fast and 2 lives left`, () => {
    let answers = [`fast`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`];
    assert.equal(countResults(answers, 2), 1050);
  });
});
