import introEl from './intro.js';
import greetingEL from './greeting.js';
import rulesEl from './rules.js';
import game1El from './game-1.js';
import game2El from './game-2.js';
import game3El from './game-3.js';
import statsEl from './stats.js';

const mainContainer = document.querySelector(`.central`);
const screens = [introEl, greetingEL, rulesEl, game1El, game2El, game3El, statsEl];

const showScreen = (ind) => {
  mainContainer.innerHTML = ``;
  screens[ind].forEach((n) => mainContainer.appendChild(n));
};

export default showScreen;
