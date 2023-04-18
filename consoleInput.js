// Example of obtaining user input in a console app, using
// the prompt-sync library:
  // 👉 https://www.codecademy.com/article/getting-user-input-in-node-js

// Be sure to install prompt-sync! There's approximately a 0% chance that
// it will work if you forget to:
  // npm install prompt-sync

// Importing the library that'll let us prompt for a user to provide
// input in the console:
const prompt = require('prompt-sync')();

// Asking the user some questions and storing their answers
// in well-named variables:
const name = prompt('What is your name? ');
const favHobby = prompt('What is your favorite hobby? ');
const favNumber = prompt('What is your favorite number? ');

// Showing the user some awesome info based on how they
// answered the questions:
console.log(`Hey there ${name}!`);
console.log(`Your favorite hobby is ${favHobby}!`);
console.log(`${favNumber} + 10 = ${Number(favNumber) + 10}!`);