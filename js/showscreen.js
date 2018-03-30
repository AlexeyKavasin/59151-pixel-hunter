const mainContainer = document.querySelector(`.central`);

const showScreen = (element) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(element);
};

export default showScreen;
