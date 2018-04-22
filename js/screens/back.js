import Application from '../application';

const back = (parent, state) => {
  parent.querySelector(`.back`).addEventListener(`click`, () => {
    state.timer.stop();
    state.timer.clear();
    Application.showIntro();
  });
};

export default back;
