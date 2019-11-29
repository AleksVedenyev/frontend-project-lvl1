import readlineSync from 'readline-sync';

const welcomeCondition = (condition) => console.log(`Welcome to the Brain Games!\n${condition}`);


const engine = (condition, incorrectAnswer) => {
  console.log(`Welcome to the Brain Games!\n${condition}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * (100 - 1));
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      return console.log(`${incorrectAnswer}, ${userName}`);
    }
    if (num % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (num % 2 === 0 && userAnswer === 'no') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
    } else {
      return console.log(`${incorrectAnswer}, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
