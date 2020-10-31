const inquirer = require("inquirer");

inquirer
  .prompt([
    { name: "name", message: "What is your name? ", default: "N/A" },
    { name: "location", message: "Where do you live?", default: "N/A" },
    { name: "bio", message: "Tell me about yourself:", default: "N/A" },
    { name: "linkedin", message: "Enter your Linkedin URL:", default: "N/A" },
    { name: "github", message: "Enter your GitHub URL:", default: "N/A" },
  ])
  .then((answers) => {});
