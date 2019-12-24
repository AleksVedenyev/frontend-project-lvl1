import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let counter = 2;
  while (counter <= num / 2) {
    if (num % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const getData = () => {
  const question = mathRandom(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(condition, getData);
