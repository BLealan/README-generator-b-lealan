//Ensure packages needed are downloaded and declared
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
let renderLicense = require("./generateMarkdown.js");

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
        choices: ["Apache 2.0", "BSD 3-Clause", "GNU GPL v3", "IBM Public License", "MIT"],
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email",
    },
];

inquirer.prompt(questions).then(data => {
    const markDown = generateMarkdown(data)
    writeToFile(markDown);
});

// Function to create and populate README file
const writeToFile = (content) => fs.writeFile("new-README.md", content, (err) => err ? console.log(err): console.log("README file created!"))

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
