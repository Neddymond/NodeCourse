//const validator = require("validator");
const note = require("./Note");
console.log(note);
//console.log(validator.isEmail("Neddymond@gmail.com"));
const chalk = require("chalk");
console.log(chalk.cyan("I am cyan"));
console.log(chalk.red.blue.green.bold("I'm rich"));

const parameter = process.argv[2];

parameter === "add" ? console.log("Adding notes...") : console.log("removing notes...");