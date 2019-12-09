import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const getData = () => {
    const question = mathRandom(100, 1);
    const answer = isEven(question);
    const brainEvenPair = cons(question, answer);
    return brainEvenPair;
  };
  return startGame(condition, getData);
};

export default brainEven;
