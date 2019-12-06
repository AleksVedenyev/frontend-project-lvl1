import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const welcomeCondition = (condition) => {
  console.log(`Welcome to the Brain Games!\n${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const attempts = 3;

const startGame = (condition, func) => {
  const userName = welcomeCondition(condition);
  for (let i = 0; i < attempts; i += 1) {
    const question = car(func);
    const answer = cdr(func);
    console.log(`Question: ${question}`);
    
  }
};

export default startGame;
