import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomValue from '../random-value';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;
const getProgression = (firstNum, progressionDifference) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextTermOfProgression = firstNum + progressionDifference * i;
    progression.push(nextTermOfProgression);
  }
  return progression;
};

const getData = () => {
  const firstNumber = getRandomValue(1, 8);
  const indexOfDeletedElement = getRandomValue(1, progressionLength - 1);
  const difference = getRandomValue(1, 20);
  const finalProgression = getProgression(firstNumber, difference);
  const answer = finalProgression.splice(indexOfDeletedElement, 1, '..').join();
  const question = finalProgression.join(', ');

  return cons(question, answer);
};

export default () => playGame(condition, getData);
