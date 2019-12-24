import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = mathRandom(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(condition, getData);
