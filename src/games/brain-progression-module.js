import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'What number is missing in the progression?';

const brainProgression = () => {
  const getData = () => {
    const firstNumberOfSequence = mathRandom(10, 1);
    const sequenceNumber = mathRandom(5, 1);

    let stringResult = `${String(firstNumberOfSequence)} `;
    let numberResult = firstNumberOfSequence;
    console.log(stringResult);
    for (let i = 0; i < 9; i += 1) {
      numberResult += sequenceNumber;
      stringResult += `${String(numberResult)} `;
      console.log(stringResult.length);
    }

    const answerRandom = Math.floor(Math.random() * stringResult.length);
    const answer = stringResult[answerRandom];

    const brainCalcPair = cons(stringResult, answer);

    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainProgression;
