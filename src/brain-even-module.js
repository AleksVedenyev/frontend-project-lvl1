import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * (100 - 1));
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`Your answer should be 'yes' or 'no'.\nLet's try again, ${userName}`);
    }
    if (num % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (num % 2 === 0 && userAnswer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default brainEven;
