import readlineSync from 'readline-sync';

const brainEven = () => {

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const randomNumber = Math.floor(Math.random());


for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * (100 - 1));
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== 'yes' || userAnswer !== 'no') {
        return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userName}`);
    }
        if (num % 2 === 0 && userAnswer === 'yes') {
            console.log('Correct!')
        } else if ((num % 2 !== 0 && userAnswer === 'no')) {
            console.log('Correct!');
        } else {
        return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${userName}`);
        };
    };
    console.log(`Congratulations, ${userName}`);
};

export default brainEven;