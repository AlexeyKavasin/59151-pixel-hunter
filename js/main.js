const mainContainer = document.querySelector(`.central`);
const screens = Array.from(document.querySelectorAll(`template`));
let currentScreen = -1;

const showScreen = (ind) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screens[ind].content.cloneNode(true));
};

const screenSwitch = (evt) => {
  // going left
  if (evt.altKey && evt.keyCode === 37 && currentScreen > 0) {
    showScreen(--currentScreen);
  }
  // going right
  if (evt.altKey && evt.keyCode === 39 && currentScreen < screens.length - 1) {
    showScreen(++currentScreen);
  }
};

document.addEventListener(`keydown`, screenSwitch);
