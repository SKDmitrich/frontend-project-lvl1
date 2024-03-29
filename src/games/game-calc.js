import _ from 'lodash';
import { getRandomNumber, startGame } from '../index.js';

// Rulles game
const rullesGame = 'What is the result of the expression?';

// Round's generator
const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = _.sample(operators);
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  // eslint-disable-next-line no-eval
  const trueAnswer = String(eval(question));
  return [question, trueAnswer];
};

const showGame = () => startGame(rullesGame, generateQuestion);

export default showGame;
