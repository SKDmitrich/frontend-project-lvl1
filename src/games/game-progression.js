import _ from 'lodash';
import { startGame } from '../index.js';

// Rulles game
const rullesGame = 'What number is missing in the progression?';

// Round's generator
const generatorQuestion = () => {
  const firstElement = _.random(1, 100);
  const iterHidenElement = _.random(1, 10);
  const diffArithmeticProgression = _.random(2, 10);
  const hidenSymbol = '.. ';
  const defaultSizeArithmeticProgressio = 10;

  let arithmeticProgression = ' ';
  let nextElement = firstElement;
  let trueAnswer;

  for (let i = 1; i <= defaultSizeArithmeticProgressio; i += 1) {
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

const newGame = () => startGame(rullesGame, generatorQuestion);

export default newGame;
