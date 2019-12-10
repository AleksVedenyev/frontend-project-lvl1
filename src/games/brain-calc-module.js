import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'What is the result of the expression?';

const brainCalc = () => {
  const getData = () => {
    const number1 = mathRandom(10, 1);
    const number2 = mathRandom(10, 1);
    const operators = ['+', '-', '*'];
    const operatorRand = Math.floor(Math.random() * operators.length);
    const operator = operators[operatorRand];
    const question = `${number1} ${operator} ${number2}`;
    const answer = () => {
      let result = 0;
      if (operatorRand === 0) {
        result = number1 + number2;
      }
      if (operatorRand === 1) {
        result = number1 - number2;
      }
      if (operatorRand === 2) {
        result = number1 * number2;
      }
      return String(result);
    };
    const brainCalcPair = cons(question, answer());
    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainCalc;
