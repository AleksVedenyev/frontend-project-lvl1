import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomValue from '../random-value';

const condition = 'Find the greatest common divisor of given numbers.';
const getAnswer = (a, b) => {
  let divisor = a;
  while (a % divisor !== 0 || b % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const getData = () => {
  const number1 = getRandomValue(1, 50);
  const number2 = getRandomValue(1, 50);
  const question = `${number1} ${number2}`;
  return cons(question, String(getAnswer(number1, number2)));
};

export default () => playGame(condition, getData);
