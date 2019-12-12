import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../utilities';

const condition = 'What number is missing in the progression?';

const brainProgression = () => {
  const getData = () => {
    const sequenceNumber = mathRandom(5, 1);
    const randomDeleteElem = mathRandom(10, 1);
    let numberResult = mathRandom(10, 1);
    const arr = [];
    for (let i = 0; i < 10; i += 1) {
      numberResult += sequenceNumber;
      arr.push(numberResult);
    }
    const arrAnswer = arr.splice(randomDeleteElem, 1, '..');
    const question = arr.join(', ');
    const answer = arrAnswer.join();
    /* let stringResult = `${String(firstNumberOfSequence)} `;
    let numberResult = firstNumberOfSequence;
    console.log(stringResult);
    for (let i = 0; i < 9; i += 1) {
      numberResult += sequenceNumber;
      stringResult += `${String(numberResult)} `;
      console.log(stringResult.length);
    } */

    //const answerRandom = Math.floor(Math.random() * stringResult.length);
    //const answer = stringResult[answerRandom];

    const brainCalcPair = cons(question, answer);

    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainProgression;
