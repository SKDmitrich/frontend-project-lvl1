import readlineSync from 'readline-sync';
import _ from 'lodash';

// Запрос имени
export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Запрос ответа
export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

// Вывод сообщений
export const checkAnswer = (trueAnswer, userAnswer, userName) => {
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'. \n Let's try again, ${userName}!`);
};

// Проверка правильности ответов

// Number's generator
export const getRandomNumber = () => _.random(0, 100);
