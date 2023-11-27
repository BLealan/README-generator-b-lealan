//Ensure packages needed are downloaded and declared
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

//Questions for the user are put into an array
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How does one install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution information.",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions for testing.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license",
        choices: ["Community", "MIT License", "GNU GPLv3"],
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "title",
        message: "Please provide your email",
    },
];

inquirer.prompt(questions).then(answers => {
    const readmeContent = (answers)

    createREADMEFile(readmeContent)
});

// Function to create and populate README file
function writeToFile(fileName, data) {
    fs.writeFile(`"${fileName}README.md", content, (err) => err ? console.log(err): console.log("README file created!")`)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
