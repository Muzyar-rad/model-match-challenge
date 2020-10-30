const inquirer = require("inquirer");

inquirer
  .prompt([
    { name: "name", message: "What is your name? " },
    { name: "location", message: "Where do you live?" },
    { name: "bio", message: "Tell me about yourself:" },
    { name: "linkedin", message: "Enter your Linkedin URL:" },
    { name: "github", message: "Enter your GitHub URL:" },
  ])
  .then((answers) => {});
