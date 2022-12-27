// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkup')

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email adress?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description of your project',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: ['npm i']
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default: ['npm test']
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
])
.then((answers) => {
    const readmeContent = generateREADME(answers); 

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Generating README...!')
    ); 
});