import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const getData = () => {
  const firstNumber = mathRandom(1, 8);
  const randomDeletedElement = mathRandom(1, progressionLength - 1);
  const difference = mathRandom(1, 20);
  const getProgression = (firstNum, progressionDifference) => {
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      const nextTermOfProgression = firstNum + progressionDifference * i;
      progression.push(nextTermOfProgression);
    }
    return progression;
  };
  const finalProgression = getProgression(firstNumber, difference);
  const deletedElement = finalProgression.splice(randomDeletedElement, 1, '..');
  const question = finalProgression.join(', ');
  const answer = deletedElement.join();

  return cons(question, answer);
};

export default () => startGame(condition, getData);
