import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random';

const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const getData = () => {
  const firstNumOfProgression = mathRandom(1, 8);
  const randomDeletedElem = mathRandom(1, progressionLength - 1);
  const progressionDifference = mathRandom(1, 20);
  const getProgression = (firstNum, progressionDiff) => {
    const progression = [];
    let nextTermOfProgression = firstNum;
    for (let i = 0; i < progressionLength; i += 1) {
      nextTermOfProgression += progressionDiff;
      progression.push(nextTermOfProgression);
    }
    return progression;
  };
  const finalProgression = getProgression(firstNumOfProgression, progressionDifference);
  const deletedElem = finalProgression.splice(randomDeletedElem, 1, '..');
  const question = finalProgression.join(', ');
  const answer = deletedElem.join();

  const brainCalcPair = cons(question, answer);
  return brainCalcPair;
};

const brainProgression = () => startGame(condition, getData);

export default brainProgression;
