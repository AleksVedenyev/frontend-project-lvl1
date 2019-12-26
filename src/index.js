import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const attemptsCount = 3;

const playGame = (condition, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attemptsCount; i += 1) {
    const dataForGame = getData();
    const question = car(dataForGame);
    const rightAnswer = cdr(dataForGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
