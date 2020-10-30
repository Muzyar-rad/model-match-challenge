const inquirer = require("inquirer");

inquirer
  .prompt([{ name: "name", message: "What is your name? " }])
  .then((answers) => {
    console.info(answers.name);
  });
