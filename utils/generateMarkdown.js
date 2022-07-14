var license;

// function that returns a license badge based on which license is passed in, if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return "![Badge](https://img.shields.io/badge/License-${license}-blue)";
  }
  if (!license) {
    return " ";
  }
}  


// function that returns the license link, if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return"- [License](#license)";
  } else {
    if (!license) {
      return " ";
    }   
  }
}


// function that returns the license section of README, if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This program is licensed by ${license}.`;
  } else {
    if (!license) { 
      return " ";
    }
  }
}


// function to generate markdown for README
function generateMarkdown(input) {
  return `# ${input.title}

  ${renderLicenseBadge(input.license)}

  ## Description
  ${input.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(input.license)}
  - [Contribution](#contribution)
  - [Test](#test)
  - [questions](#questions)
  - [Github](#github)
  - [Email](#email)
  
  ## Installation
  ${input.installation}

  ## Usage
  ${input.usage}

  ## License
  ${renderLicenseSection(input.license)}

  ## Contribution
  ${input.contribution}

  ## Test
  ${input.test}

  ## Questions
  Feel free to reach out GitHub or email if you have any questions
  
  ## GitHub URL
  Github: https://github.com/${input.github}
  
  ## Email
  ${input.email}
  
  Made with ❤️ by Salvador Banuelos
### © 2022 ${input.title}, Inc.`;
}

module.exports = generateMarkdown;
