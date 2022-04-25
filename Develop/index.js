// File System module global
const fs = require('fs')

// NPM package that helps capture user input through the command line
const inquirer = require('inquirer')

// Importing a local module
const {writeFile} = require('./utils/generate-site.js');



// Array of questions for user input
const questions = () => {
    return inquirer.prompt([

    // ReadMe title, user input prompt
    {
        type: 'input',
        name: "title",
        message: "What would you like the ReadMe to be named?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title for the ReadMe!')
                return false;
            }
        }
    },
    
    // Description, user input prompt
    {
        type: 'input',
        name: "description",
        message: "Type a description for the ReadMe page",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console,log('Please enter a description for the ReadMe!')
                return false;
            }
        }
    },

    // Installation, user input prompt
    {
        type: 'input',
        name: "Installation",
        message: "If applicable, what are the installation instructions?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                return false;
            }
        }
    },
 
    // Usage, user input prompt
    {
        type: 'input',
        name: "usage",
        message: "If applicable, what is the usage information?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    // Choose license, user input prompt
    {
        type: 'list',
        name: "license",
        choices: [
            new inquirer.Separator(),
            "-- Skip --",
            new inquirer.Separator(),
            "apache2", "bsd2", "bsd3",
            new inquirer.Separator(),
            "cc1", "cc4-international", "cc4-sharealike",
            new inquirer.Separator(),
            "EPL1", "GNU GPLv2", "GNU GPLv3",
            new inquirer.Separator(),
            "MIT", "Unlicense"
        ]
    },    
    
    // Contribution guidelines, user input prompt
    {
        type: 'input',
        name: "contribution",
        message: "If applicable, what are the contribution guideline?",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    
    // Test, user input prompt
    {
        type: 'input',
        name: "test",
        message: "If applicable, what are the test instructions?",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    
    // Github name, user input prompt
    {
        type: 'input',
        name: "githubName",
        message: "What is your Github username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return false;
            }
        }
    },
        
    // Email, user input prompt
    {
        type: 'input',
        name: "email",
        message: "What is your email, where you can be reached for repository questions?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return false;
            }
        }
    },]);
}







// Function to initialize app
function init() {}

// Function call to initialize app
init();


// Generate ReadMe file
const filename = "Generated-README.md";
fs.writeFileSync(filename, text);

inquirer
    .prompt(questions)
    .then(writeToFile)
    .catch(catchError);