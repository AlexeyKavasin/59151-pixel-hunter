export const trimQuestionsData = (questionsData) => {
  return questionsData.map((question) => {
    return {
      type: question.type,
      task: question.question,
      images: question.answers.map((answer) => {
        return answer.image.url;
      }),
      width: [...new Set(question.answers.map((answer) => {
        return answer.image.width;
      }))].join(``),
      height: [...new Set(question.answers.map((answer) => {
        return answer.image.height;
      }))].join(``),
      loadedAnswers: question.answers.map((answer) => answer.type)
    };
  });
};
