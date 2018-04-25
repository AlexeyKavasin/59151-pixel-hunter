import {LEVELS_COUNT} from '../data/constants';

const unknownProgress = `<li class="stats__result stats__result--unknown"></li>`;

export const getGameStatsHtml = (data) => {
  return `
    <ul class="stats">
      ${[...data].map((result) => {
    return `<li class="stats__result stats__result--${result}"></li>`;
  }).join(``)}

      ${new Array(LEVELS_COUNT - data.length).fill(unknownProgress).join(``)}
    </ul>`;
};
