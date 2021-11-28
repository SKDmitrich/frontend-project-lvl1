import _ from 'lodash';
import { startGame } from '../index.js';

// Rulles game
const rullesGame = 'What number is missing in the progression?';

// Round's generator
const generateQuestion = () => {
  const firstElement = _.random(1, 100);
  const SizeArithmeticProgressio = _.random(5, 10);
  const iterHidenElement = _.random(1, SizeArithmeticProgressio);
  const diffArithmeticProgression = _.random(2, 10);
  const hidenSymbol = '.. ';

  let arithmeticProgression = ' ';
  let nextElement = firstElement;
  let trueAnswer;

  for (let i = 1; i <= SizeArithmeticProgressio; i += 1) {
    if (i === iterHidenElement) {
      arithmeticProgression += hidenSymbol;
      trueAnswer = String(nextElement);
    } else {
      arithmeticProgression += `${nextElement} `;
    }
    nextElement += diffArithmeticProgression;
  }
  return [arithmeticProgression, trueAnswer];
};

const showGame = () => startGame(rullesGame, generateQuestion);

export default showGame;
