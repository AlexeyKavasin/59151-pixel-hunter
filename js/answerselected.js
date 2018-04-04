const answerSelected = (questions) => {
  return Array.from(questions).filter((q) => q.checked === true).length === questions.length / 2;
};

export default answerSelected;
