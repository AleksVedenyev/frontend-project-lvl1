import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getData = () => {
  const number1 = mathRandom(1, 10);
  const number2 = mathRandom(1, 10);
  const operatorRand = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorRand];
  const question = `${number1} ${operator} ${number2}`;
  const answer = () => {
    let result = 0;
    switch (operatorRand) {
      case 0:
        result = number1 + number2;
        return String(result);
      case 1:
        result = number1 - number2;
        return String(result);
      default:
        result = number1 * number2;
        return String(result);
    }
  };
  const brainCalcPair = cons(question, answer());
  return brainCalcPair;
};

const brainCalc = () => startGame(condition, getData);

export default brainCalc;
