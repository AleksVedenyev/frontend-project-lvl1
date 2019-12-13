import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random-module';

const condition = 'What number is missing in the progression?';

const brainProgression = () => {
  const getData = () => {
    const firstNumOfProgression = mathRandom(8, 1);
    const randomDeletedElem = mathRandom(9, 1);
    const progressionDifference = mathRandom(20, 1);
    const getProgression = (firstNum, progressionDiff) => {
      const arr = [];
      let nextTermOfProgression = firstNum;
      for (let i = 0; i < 10; i += 1) {
        nextTermOfProgression += progressionDiff;
        arr.push(nextTermOfProgression);
      }
      return arr;
    };
    const finalProgression = getProgression(firstNumOfProgression, progressionDifference);
    const deletedElem = finalProgression.splice(randomDeletedElem, 1, '..');
    const question = finalProgression.join(', ');
    const answer = deletedElem.join();

    const brainCalcPair = cons(question, answer);

    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainProgression;
