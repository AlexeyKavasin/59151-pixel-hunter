import getElFromTemplate from './getelfromtemplate.js';
import showScreen from './showscreen.js';
import greetingEL from './greeting.js';
import footer from './footer.js';

const introEl = getElFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>${footer}
  `);

let asteriskIntro = introEl.querySelector(`.intro__asterisk`);
asteriskIntro.addEventListener(`click`, () => showScreen(greetingEL));

export default introEl;
