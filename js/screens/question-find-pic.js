export const askQuestion = (imgs) => {
  return `
    <form class="game__content  game__content--triple">
  ${imgs.map((img) => {
    return `
    <div class="game__option">
      <img src="${img}" alt="Option 1" width="304" height="455">
    </div>`;
  }).join(``)}
    </form>`;
};
