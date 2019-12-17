import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const question = mathRandom(1, 100);
  const result = isEven(question);
  const getAnswer = (res) => {
    switch (res) {
      case true:
        return 'yes';
      default:
        return 'no';
    }
  };
  const answer = getAnswer(result);
  const brainEvenPair = cons(question, answer);
  return brainEvenPair;
};

const brainEven = () => startGame(condition, getData);

export default brainEven;
