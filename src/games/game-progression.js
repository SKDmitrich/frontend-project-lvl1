import _ from 'lodash';
import { startGame } from '../index.js';

// Rulles game
const rullesGame = 'What number is missing in the progression?';

const minCount = 1;
const maxCount = 10;
const minLength = 5;

// Round's generator
const generateQuestion = () => {
  const firstElement = _.random(minCount, maxCount);
  const sizeArithmeticProgression = _.random(minLength, maxCount);
  const iterHidenElement = _.random(minCount, sizeArithmeticProgression);
  const diffArithmeticProgression = _.random(minCount, maxCount);
  const hidenSymbol = '.. ';

  let arithmeticProgression = '';
  let nextElement = firstElement;
  let trueAnswer;

  for (let i = 1; i <= sizeArithmeticProgression; i += 1) {
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
