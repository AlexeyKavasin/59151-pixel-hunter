import {QUESTION_TYPES, ANSWER_TYPES} from './data/constants';

const renameQuestionType = (type) => {
  let replacedType = ``;
  switch (type) {
    case `two-of-two`:
      replacedType = QUESTION_TYPES.chooseType;
      break;
    case `one-of-three`:
      replacedType = QUESTION_TYPES.findUnique;
      break;
    case `tinder-like`:
      replacedType = QUESTION_TYPES.photoOrPic;
      break;
  }
  return replacedType;
};

const renameAnswerTypes = (type) => {
  let replacedType = ``;
  switch (type) {
    case `painting`:
      replacedType = ANSWER_TYPES.paint;
      break;
    case `photo`:
      replacedType = ANSWER_TYPES.photo;
      break;
  }
  return replacedType;
};

export const trimQuestionsData = (questionsData) => {
  return questionsData.map((question) => {
    return {
      type: renameQuestionType(question.type),
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
      loadedAnswers: question.answers.map((answer) => {
        return renameAnswerTypes(answer.type);
      })
    };
  });
};
