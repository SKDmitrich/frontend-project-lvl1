import _ from 'lodash';
import { startGame } from '../index.js';

// Функция на проверку четности

const rullesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTrueAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generatorQuestion = () => {
  const question = _.random(0, 100);
  const trueAnswer = getTrueAnswer(question);
  return [question, trueAnswer];
};

const newGame = () => startGame(rullesGame, generatorQuestion);

export default newGame;
