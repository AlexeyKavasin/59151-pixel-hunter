import showScreen from '../showscreen';

export const askQuestion = (imgs) => {
  return `
  <form class="game__content">
    ${imgs.map((img, ind) => {
    return `
      <div class="game__option">
        <img src="${img}" alt="Option ${ind + 1}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${ind + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${ind + 1}" type="radio" value="paint">
         <span>Рисунок</span>
        </label>
      </div>`;
  }).join(``)}
    </form>`;
};

export const addBehaviour = (el, nextLevel, correctAnswer) => {
  const form = el.querySelector(`.game__content`);
  form.addEventListener(`change`, () => {
    const allAnswers = form.querySelectorAll(`input[type="radio"]`);
    const answersChecked = form.querySelectorAll(`input[type="radio"]:checked`);
    if (answersChecked.length === allAnswers.length / 2) {
      const isCorrectAnswer = correctAnswer[0] === answersChecked[0].value && correctAnswer[1] === answersChecked[1].value;
      showScreen(nextLevel(isCorrectAnswer));
    }
  });
};
