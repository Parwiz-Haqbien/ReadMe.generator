function generateLicenseBadge(license) {

    if (license === "MIT"){
        return `![GitHub](https://img.shields.io/badge/license-MIT-green?style=plastic)`;
    }

    if (license === "Apache 2.0"){
        return `![GitHub](https://img.shields.io/badge/license-Apache2-green?style=plastic)`;
    }

    if (license === "GPL 3.0"){
        return `![GitHub](https://img.shields.io/badge/license-GPLv3-green?style=plastic)`;
    }

    if (license === "BSD 3"){
        return `![GitHub](https://img.shields.io/badge/license-BSD3-green?style=plastic)`;
    }

    else {
        return ``;
    }
}

function generateLicenseLink(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPL 3.0" || license === "BSD 3"){
        return `View license: [LICENSE](./LICENSE)`;
    }
    else {
        return ``;
    }

}

function generateLicenseSection(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPL 3.0" || license === "BSD 3"){
        return `Licensed under the standard ${license} license. Please refer to the license in the repo for more information.`;
    }

    else {

        return ``;
    }
}


function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
  ${answers.description}
  ${generateLicenseBadge(answers.license)}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${generateLicenseSection(answers.license)}
  ${generateLicenseLink(answers.license)}
  ## Contributing
  ${answers.contribution}
  ## Tests
  ${answers.tests}
  ## Questions
  For any additional questions, please use the below contact details to get in touch via GitHub or email.
  
  GitHub: (https://github.com/${answers.github})
  
  [Send an email](mailto:${answers.email})
  
  `;
}

module.exports = generateMarkdown;