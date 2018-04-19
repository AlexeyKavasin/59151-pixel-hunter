import AbstractView from './abstract-view';
import header from '../header';
import footer from '../footer';
import {gameStatsHtml} from '../stats-progress-bar';
import {calculateStats, addGameStats, getGameStats} from '../../data/stats-count';

export default class StatsView extends AbstractView {
  constructor(state, answers) {
    super();
    this.state = state;
    this.answers = answers;
  }

  get template() {
    const statsHtml = ({answers, bonuses, regularPoints, totalResult: {success, score}}, index) => {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${index + 1}.</td>
          <td colspan="2">${gameStatsHtml(answers)}</td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${regularPoints ? regularPoints : 0}</td>
        </tr>
        ${[...bonuses].map(({title, icon, count, points, total}) => {
    return `
        <tr>
          <td></td>
          <td class="result__extra">${title}</td>
          <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${icon}"></span></td>
          <td class="result__points">x&nbsp;${points}</td>
          <td class="result__total">x&nbsp;${total}</td>
        </tr>`;
  }).join(``)}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${success ? score : `FAIL`}</td>
        </tr>
      </table>`;
    };

    const statistic = calculateStats(this.state, this.answers);
    addGameStats(statistic);
    const finalStats = getGameStats();

    return `
    ${header(this.state)}
    <div class="result">
      <h1>${statistic.totalResult.success ? `Победа!` : `Вы проиграли`}</h1>
      ${finalStats.map((stats, index) => {
    return statsHtml(stats, index);
  }).join(``)}
    </div>
    ${footer}`;
  }

  bind() {
  }
}
