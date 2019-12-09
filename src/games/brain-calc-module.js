import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'What is the result of the expression?';

const brainCalc = () => {
    const getData = () => {
      const question = mathRandom(100, 1);
      const answer = isEven(question);
      const brainEvenPair = cons(question, answer);
      return brainEvenPair;
    };
    return startGame(condition, getData);
  };

export default brainCalc;