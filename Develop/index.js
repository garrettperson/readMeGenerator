// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name/title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to intall the project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the instructions to use the project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List collaborators, third-party assets, and/or tutorials you used/worked-with to create the project. Include links to the websites of other creators.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Which license would you like to choose?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'other'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'List the features of your project (optional).',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Describe how other developers can contribute to your project (optional).',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Provide examples of how to run tests on your project (optional).',
        name: 'tests',
    }
];


// TODO: Create a function to write README file
function writeToFile(answers) {
    const markdown = generateMarkdown(answers)
    fs.writeFile('SampleREADME.md', markdown, err => {
        if (err) {
            return console.log(err);
        }
    console.log("README.md file successfully generated.")
    });
}

inquirer.prompt(questions)
.then(writeToFile)

