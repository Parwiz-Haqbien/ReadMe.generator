//Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkup')

//Create an array of questions for user input
const questions =[
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your projects?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description about the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write a brief description about the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How is your project installed?',
        default: "N/A",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your project will be used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to your project?',
        default: 'For contribution, use Github to fork the repository to submit suggested changes or changes using feature branches'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    },
];

//Create a function to initialize app
function init() {
   // Use inquirer for question to start
    inquirer
    .createPromptModule(questions)
    // Gather the answers and send to write the file
    .then((answers) => {
        const generateMarkdown = generateREADME(answers); 
    
        fs.writeFile('README.md', generateMarkdown, (err) =>
        err ? console.log(err) : console.log('Generating README...!')
        ); 
    });
};

// Function call to start the app
init();