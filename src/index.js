import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const welcomeCondition = (condition) => {
  console.log(`Welcome to the Brain Games!\n${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const startGame = (condition, func) => {
  const attempts = 3;
  const userName = welcomeCondition(condition);
  for (let i = 0; i < attempts; i += 1) {
    const makePair = func();
    const question = car(makePair);
    const rightAnswer = cdr(makePair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default startGame;
