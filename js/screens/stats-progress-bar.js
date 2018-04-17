import {LEVELS_COUNT} from '../constants.js';

const unknownProgress = `<li class="stats__result stats__result--unknown"></li>`;

export const gameStatsHtml = (data) => {
  return `
    <ul class="stats">
      ${[...data].map((result) => {
    return `<li class="stats__result stats__result--${result}"></li>`;
  }).join(``)}

      ${new Array(LEVELS_COUNT - data.length).fill(unknownProgress).join(``)}
    </ul>`;
};
