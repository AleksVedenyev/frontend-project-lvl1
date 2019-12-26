import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomValue from '../random-value';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = getRandomValue(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(condition, getData);
