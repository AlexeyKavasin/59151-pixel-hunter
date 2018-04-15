import getElFromTemplate from '../getelfromtemplate.js';
import showScreen from '../showscreen.js';
import greetingEL from './greeting.js';
import footer from './footer.js';
import {gameState, setTimer} from '../data/game-state.js';
import {timer} from '../timer.js';
import handleTimer from '../timer-handler.js';
import {answers} from '../data/answers.js';
import {TIME_TO_GAME} from '../constants.js';

const introEl = () => {
  const el = getElFromTemplate(`
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}`);
    el.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
      const initState = setTimer(gameState, timer());
      showScreen(greetingEL(initState, answers));
    });

    handleTimer();

    return el;
};

export default introEl;
