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
        type: 'input',
        name: 'License',
        message: 'What kind of license should your project have?',
    },
])