import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getData = () => {
  const number1 = mathRandom(1, 10);
  const number2 = mathRandom(1, 10);
  const randomOperator = mathRandom(0, operators.length - 1);
  const operator = operators[randomOperator];
  const question = `${number1} ${operator} ${number2}`;
  const getAnswer = () => {
    switch (operator) {
      case '+':
        return String(number1 + number2);
      case '-':
        return String(number1 - number2);
      default:
        return String(number1 * number2);
    }
  };
  return cons(question, getAnswer());
};

export default () => startGame(condition, getData);
