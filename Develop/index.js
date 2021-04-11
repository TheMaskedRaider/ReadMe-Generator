// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your ReadMe'
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license do you wish to use? Please select only one',
        choices: ['Apache', 'GPLv3', 'MIT', 'Mozilla']
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project in a step-by-step manner'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },

    {
        type: 'input',
        name: 'features',
        message: 'List project features here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your Github ID'
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Enter your full website address including http(s)://'
    },
    {
        type: 'input',
        name: 'questions3',
        message: 'Enter your email address'
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Finally, feel free to credit any individuals.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error("Something went wrong.") : console.log("Success")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            writeToFile("README.md", markDown(answers))
        }).catch()
}

// Function call to initialize app
init();
