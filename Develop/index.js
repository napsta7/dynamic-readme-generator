// TODO: Include packages needed for this application
//Here I imported the file system and inquirer packages, and imported the generateMarkdown function
import fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
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
    const generatedMarkdown = generateMarkdown(data); // Variable that stores the generated markdown
  
    fs.writeFile(fileName, generatedMarkdown, (err) => { //If there is an error, the console will show the error, if the file was written to successfully, a message will log saying that the file was created successfully
      if (err) throw err;
      console.log('README.md file generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions); //questions is the array of questions for the user that was defined earlier
}

// Function call to initialize app
init() 
  .then(answers => { //This is called when the promise is resolved, and answers contains the information that the user put in
    writeToFile('README.md', answers);
  })
  .catch(error => { //If there is an error, the console will log an error message and then the error
    console.error('Error initializing app:', error);
  });