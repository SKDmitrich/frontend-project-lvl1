import _ from 'lodash';
import { startGame } from '../index.js';

// Rulles game
const rullesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция на проверку четности
const getTrueAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Round's generator
const generateQuestion = () => {
  const question = _.random(0, 100);
  const trueAnswer = getTrueAnswer(question);
  return [question, trueAnswer];
};

const showGame = () => startGame(rullesGame, generateQuestion);

export default showGame;
