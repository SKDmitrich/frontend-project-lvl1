#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

// Функция на проверку четности
const getTrueAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Знакомство с пользователем
const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  readlineSync.question(
    'Answer "yes" if the number is even, otherwise answer "no".',
  );
  return userName;
};

// Начало игры
const getAnswer = () => {
  const result = [];
  const randomNumber = _.random(0, 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const trueAnswer = getTrueAnswer(randomNumber);
  result[0] = trueAnswer;
  result[1] = userAnswer;
  return result;
};

// Запуск игры
const playGame = () => {
  const userName = getUserName();
  for (let iter = 1; iter < 4; iter += 1) {
    const result = getAnswer();
    if (result[0] === result[1]) {
      console.log('Correct!');
    }
    if (result[0] !== result[1]) {
      return console.log(
        `'${result[1]}' is wrong answer ;(. Correct answer was '${result[0]}'. \n Let's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

playGame();
