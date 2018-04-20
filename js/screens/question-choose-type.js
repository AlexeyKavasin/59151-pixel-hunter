export const askQuestion = (imgs) => {
  return `
  <form class="game__content">
    ${imgs.map((img, ind) => {
    return `
      <div class="game__option">
        <img src="${img}" alt="Option ${ind + 1}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${ind + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${ind + 1}" type="radio" value="paint">
         <span>Рисунок</span>
        </label>
      </div>`;
  }).join(``)}
    </form>`;
};
