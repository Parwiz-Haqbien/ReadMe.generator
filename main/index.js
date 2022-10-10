const inquirer = require('inquirer')
const fs = require('fs')


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
        name: 'License',
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
])