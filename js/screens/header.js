const header = (state) => {
  const timeHtml = () => {
    return state.TIMER.getTimer() ? `<h1 class="game__timer">${state.TIMER.getTimer()}</h1>` : ``;
  };

  const livesHtml = () => {
    return state.TIMER.getTimer() && state.LIVES >= 0 ? `
      <div class="game__lives">
      ${new Array(3 - state.LIVES)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(state.LIVES)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      </div>` : ``;
  };

  const el = `
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${timeHtml(state)}
    ${livesHtml(state)}
  </header>`;

  return el;
};

export default header;
