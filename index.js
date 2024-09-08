import { generate } from 'random-words';

export const sum = (a, b, c) => {
  return a + b + 1;
};

console.log(myUndefinedVariable);

const word = generate();
console.log(
  `Hello! 
  The ${chalk.redBright('random word')} of today is: ${chalk.bgRed(word)}. 
  The word length is ${sum(word.length, 0)}.`,
);
