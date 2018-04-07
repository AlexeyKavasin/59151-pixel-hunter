import {assert} from 'chai';
import {tickTimer} from './ticktimer.js';

describe(`tick timer testing`, () => {
  it(`should not allow set non numeric value`, () => {
    assert.throws(() => tickTimer(`str`), /Time should be a number/);
    assert.throws(() => tickTimer([]), /Time should be a number/);
    assert.throws(() => tickTimer({}), /Time should be a number/);
  });
  it(`should not allow set negative value or 0`, () => {
    assert.throws(() => tickTimer(-1), /Time should be a positive number/);
    assert.throws(() => tickTimer(0), /Time should be a positive number/);
  });
  it(`should return timer object with time, state and tick() working`, () => {
    const newTimer = tickTimer(30);
    newTimer.tick();
    assert.equal(newTimer.active, true);
    assert.equal(newTimer.time, 29);
    newTimer.tick();
    assert.equal(newTimer.time, 28);
  });
  it(`should return message when time is up`, () => {
    const newTimer = tickTimer(1);
    assert.equal(newTimer.tick(), `Time is up`);
  });
});
