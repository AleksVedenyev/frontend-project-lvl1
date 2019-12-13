import { cons } from '@hexlet/pairs';
import startGame from '..';
import mathRandom from '../math-random-module';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainProgression = () => {
  const getData = () => {
    const question = mathRandom(100, -1);
    const isPrime = (num) => {
      if (num <= 1) {
        return 'no';
      }
      let counter = 2;
      while (counter < num) {
        if (num % counter === 0) {
          return 'no';
        }
        counter += 1;
      }
      return 'yes';
    };
    const answer = isPrime(question);
    const brainCalcPair = cons(question, answer);

    return brainCalcPair;
  };
  return startGame(condition, getData);
};

export default brainProgression;
