import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomValue from '../random-value';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const getAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    default:
      return (number1 * number2);
  }
};
const getData = () => {
  const number1 = getRandomValue(1, 10);
  const number2 = getRandomValue(1, 10);
  const indexOfOperator = getRandomValue(0, operators.length - 1);
  const operator = operators[indexOfOperator];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(getAnswer(operator, number1, number2));
  return cons(question, answer);
};

export default () => playGame(condition, getData);
