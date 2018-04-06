import {assert} from 'chai';
import {tickTimer} from './ticktimer.js';

describe(`tick timer testing`, () => {
  it(`should not allow set non number value`, () => {
    assert.throws(() => tickTimer(`str`), /Time should be a number/);
  });
  it(`should return timer object`, () => {
    assert.notStrictEqual(tickTimer(30), {timeRemains: 30, active: true});
  });
  it(`should return false if time is up`, () => {
    assert.deepEqual(tickTimer(0), false);
  });
});
