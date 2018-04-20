export const askQuestion = (imgs) => {
  return `
  <form class="game__content  game__content--wide">
    ${imgs.map((img) => {
    return `
      <div class="game__option">
        <img src="${img}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      `;
  }).join(``)}
  </form>`;
};
