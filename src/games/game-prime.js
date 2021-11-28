import _ from 'lodash';
import { startGame } from '../index.js';

// Rulles game
const rullesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// getTrueAnswer
const getTrueAnswer = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Generator question
const generateQuestion = () => {
  const question = _.random(2, 1000);
  const trueAnswer = getTrueAnswer(question);
  return [question, trueAnswer];
};

const showGame = () => startGame(rullesGame, generateQuestion);

export default showGame;
