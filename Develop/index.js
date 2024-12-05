// TODO: Include packages needed for this application✅
import fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input✅
const questions = [{
    message: "Please enter the title of your README:",
    name: "userTitle"
},{
    message: "Please enter the description of your README:",
    name: "userDescription"
},{
    message: "Please provide installation instructions:",
    name: "userInstall"
},{
    message: "Please provide usage information:",
    name: "userUsage"
},{
    type: "list",
    message: "Please select a license:",
    name: "userLicense",
    choices: ['MIT', 'Apache', 'BSD', 'GPL', 'LGPL', 'AGPL']
},{
    message: "Please add any collaborators, third party assets, tutorials, etc that contributed to this project:",
    name: "userContributing"
},{
    message: "Please provide examples for how to run tests for your application:",
    name: "userTests"
},{
    message: "Please enter your GitHub username:",
    name: "userGitHub",
},{
    message: "Please enter your email:",
    name: "userEmail"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const generatedMarkdown = generateMarkdown(data); // Generate Markdown
  
    fs.writeFile(fileName, generatedMarkdown, (err) => {
      if (err) throw err;
      console.log('README.md file generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(answers => {
    writeToFile('README.md', answers); // Pass the answers to writeToFile
  })
  .catch(error => {
    console.error('Error initializing app:', error);
  });