export const askQuestion = (imgs, width, height) => {
  return `
    <form class="game__content  game__content--triple">
  ${imgs.map((img) => {
    return `
    <div class="game__option">
      <img src="${img}" alt="Option 1" width="${width}" height="${height}">
    </div>`;
  }).join(``)}
    </form>`;
};
