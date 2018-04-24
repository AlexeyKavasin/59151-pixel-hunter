import {QUESTION_TYPES, ANSWER_TYPES} from './constants';

const questions = [];

const questionsData = window.fetch(`https://es.dump.academy/pixel-hunter/questions`);

const adjustQuestionType = (type) => {
  let replacedType = ``;
  switch (type) {
    case `two-of-two`:
      replacedType = QUESTION_TYPES.chooseType;
      break;
    case `one-of-three`:
      replacedType = QUESTION_TYPES.findPic;
      break;
    case `tinder-like`:
      replacedType = QUESTION_TYPES.photoOrPic;
      break;
  }
  return replacedType;
};

const createQuestionObj = (typeOfQuestion, urls, width, height, imageTypes) => {
  questions.push({
    type: typeOfQuestion,
    images: urls,
    correctAnswer: imageTypes
  });
};

questionsData.
    then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    }).
    then((data) => data.map((question) => {
      const type = adjustQuestionType(question.type);
      const width = [...new Set(question.answers.map((answer) => {
        return answer.image.width;
      }))].join(``);
      const height = [...new Set(question.answers.map((answer) => {
        return answer.image.height;
      }))].join(``);
      const urls = question.answers.map((answer) => {
        return answer.image.url;
      });
      const imageTypes = question.answers.map((answer) => {
        return answer.type;
      });
      // console.log(type, urls, width, height, imageTypes);
      createQuestionObj(type, urls, width, height, imageTypes);
    })).
    catch((err) => console.error(err));

console.dir(questions);

export default [
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  },
  {
    type: QUESTION_TYPES.photoOrPic,
    images: [`https://k42.kn3.net/D2F0370D6.jpg`],
    correctAnswer: ANSWER_TYPES.paint
  },
  {
    type: QUESTION_TYPES.findPic,
    images: [`https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.chooseType,
    images: [`https://k42.kn3.net/CF42609C8.jpg`, `http://i.imgur.com/1KegWPz.jpg`],
    correctAnswer: [ANSWER_TYPES.paint, ANSWER_TYPES.photo]
  }
];
