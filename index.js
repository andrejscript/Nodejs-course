// function (exports, require, module, __dirname, __filename) {

const chalk = require('chalk');
const text = require('./data');

console.log(chalk.yellowBright('Hello NodeJS'));
console.log(text);

console.log(__filename)

// }