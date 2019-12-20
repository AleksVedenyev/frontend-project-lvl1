import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getData = () => {
  const number1 = mathRandom(1, 10);
  const number2 = mathRandom(1, 10);
  const operatorRand = mathRandom(0, operators.length - 1);
  const operator = operators[operatorRand];
  const question = `${number1} ${operator} ${number2}`;
  const answer = () => {
    switch (operator) {
      case '+':
        return String(number1 + number2);
      case '-':
        return String(number1 - number2);
      default:
        return String(number1 * number2);
    }
  };
  const brainCalcPair = cons(question, answer());
  return brainCalcPair;
};

const brainCalc = () => startGame(condition, getData);

export default brainCalc;
