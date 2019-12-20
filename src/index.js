import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const attempts = 3;

const startGame = (condition, func) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attempts; i += 1) {
    const makePair = func();
    const question = car(makePair);
    const rightAnswer = cdr(makePair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
