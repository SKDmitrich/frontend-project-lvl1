import readlineSync from 'readline-sync';
import _ from 'lodash';

const counterRouds = 3;

// Start game
export const startGame = (rullesGame, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rullesGame);

  for (let i = 1; i <= counterRouds; i += 1) {
    const [question, trueAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (trueAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

// Number's generator
export const getRandomNumber = () => _.random(1, 100);
