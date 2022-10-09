const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME =({name,license,URL,github,}) =>
`Your read me name ${name}
What is your URL ${URL}
Your chosen license ${license}
Your chosen Github ${github}`;


inquirer
    .prompt( [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name',
        },
        {
            type: 'input',
            name: 'URL',
            message: 'What is your URL',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is your license',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github',
        },
    ])
    .then((answer) => {
        const readmeContent =generateREADME(answer);
        fs.writeFile('README.md' , readmeContent, (err) =>
        err ? console.log(err) : console.log('README is succefely created')
        );
    });