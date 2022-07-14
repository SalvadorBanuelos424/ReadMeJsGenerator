// packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');



// Array of questions for user input
const questions = () => {
    return inquirer.prompt([
        { // ReadMe title
            type: 'input',
            name: "title",
            message: "What is your projects Title?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else { console.log('Please enter a Title for your project.')
                    return false;
                }
            }
        },
        { // description
            type: 'input',
            name: "description",
            message: "Type a short description of your project, concise and informative.",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else { console.log('Your project needs a description.')
                    return false;
                }
            }
        },
        { // installation
            type: 'input',
            name: "Installation",
            message: "Provide the steps for a proper installation.",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else { console.log('If applicable, provide the steps for a proper installation.')
                    return false;
                }
            }
        },
        { // Usage information
            type: 'input',
            name: "usage",
            message: "Explain, how to use the program.",
            validate: usageInput => {
                if (usageInput) { console.log('Please provide instructions to properly use the program.')
                    return true;
                } else {
                    return false;
                }
            }
        },
        { // License
            type: 'list',
            name: "license",
            message: "Choose all applicable program licenses.",
            choices: ["MIT", "Apache_2", "ISC", "GNU", "Mozilla"],
            validate: licenseInput => {    
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },           
        { // contribution
            type: 'input',
            name: "contribution",
            message: "How can other people contribute to this project?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else { console.log('Contributions are important, how can other people contribute to this projects?')
                    return false;
                }
            }
        },    
        { // tests
            type: 'input',
            name: "test",
            message: "If applicable, what are the test instructions?",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else { console.log('If applicable, do not forget to add the test instructions')
                    return false;
                }
            }
        },    
        { // github
            type: 'input',
            name: "githubName",
            message: "What is your Github username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else { console.log('Please enter your Github username.')
                    return false;
                }
            }
        },        
        { // email
            type: 'input',
            name: "email",
            message: "Finally, what is your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else { console.log('Please enter your email address.')
                    return false;
                }
            }
        },
    ])
}


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('./dist/README.md', generateMarkdown(fileName, data));
}

// function to initialize the app
function init() {questions().then(writeToFile);}

// Function call to initialize app
init();
