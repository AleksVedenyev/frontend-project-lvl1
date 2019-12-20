import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  let counter = 2;
  while (counter < num) {
    if (num % counter === 0) {
      return false;
    }
    counter += 1;
  }
  return true;
};

const getData = () => {
  const question = mathRandom(-1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  const brainCalcPair = cons(question, answer);

  return brainCalcPair;
};

const brainProgression = () => startGame(condition, getData);

export default brainProgression;
