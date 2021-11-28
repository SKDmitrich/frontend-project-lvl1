import { getRandomNumber, startGame } from '../index.js';

// Rulles game
const rullesGame = 'Find the greatest common divisor of given numbers.';

// Check question
const getGreatestCommonDivisior = (firstNumber, secondNumber) => {
  let moreNumber;
  let smallerNumber;

  if (firstNumber > secondNumber) {
    moreNumber = firstNumber;
    smallerNumber = secondNumber;
  } else {
    moreNumber = secondNumber;
    smallerNumber = firstNumber;
  }

  if (moreNumber % smallerNumber === 0) {
    return smallerNumber;
  }
  return getGreatestCommonDivisior(smallerNumber, (moreNumber % smallerNumber));
};

// Round's generator
const generateQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber}  ${secondNumber}`;
  const trueAnswer = String(getGreatestCommonDivisior(firstNumber, secondNumber));
  return [question, trueAnswer];
};

const newGame = () => startGame(rullesGame, generateQuestion);

export default newGame;
