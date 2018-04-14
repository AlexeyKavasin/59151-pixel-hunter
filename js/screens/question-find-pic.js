import showScreen from '../showscreen.js';

export function askQuestion(img1, img2, img3) {
  return `
    <form class="game__content  game__content--triple">
       <div class="game__option">
        <img src="${img1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${img2}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${img3}" alt="Option 1" width="304" height="455">
      </div>
    </form>`;
}

const options = game3El.querySelectorAll(`.game__option`);
const backBtn = game3El.querySelector(`.back`);

backBtn.addEventListener(`click`, () => showScreen(introEl));
options.forEach((o) => {
  o.addEventListener(`click`, () => showScreen(statsEl));
});

export default game3El;
