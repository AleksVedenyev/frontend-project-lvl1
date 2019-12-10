import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const getData = () => {
    const number1 = mathRandom(50, 1);
    const number2 = mathRandom(50, 1);
    const question = `${number1} ${number2}`;
    const answer = (a, b) => {
      let divisor = a;
      while (a % divisor !== 0 || b % divisor !== 0) {
        divisor -= 1;
      }
      return String(divisor);
    };
    const brainCalcPair = cons(question, answer(number1, number2));
    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainGCD;