// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, license, contribution, test, github, email}) =>
  `# ${title}

  ## Description
  ${description}

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ## Questions

  You can find me at: [${github}](www.github.com/${github})
  And email questions to me at: ${email}
`;

module.exports = generateMarkdown;