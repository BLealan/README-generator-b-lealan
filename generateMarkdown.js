// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

let renderLicense = (license) => {
  let licenseBadge = "";
  switch(license.license){
    case "Apache 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case "BSD 3-Clause":
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "GNU GPL v3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "IBM Public License":
      licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://www.ibm.com/docs/en/linux-on-z?topic=examples-common-public-license-v10)";
      break;
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    default:
      licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, license, contribution, test, github, email}) =>
  `# ${title} 

  ${renderLicense({license})}

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

  ${renderLicense({license})}  
  You have selected ${license} and as such the application is covered by it's terms.  
  Please click badge for details.

  ## Contributing

  ${contribution}

  ## Tests

  ${test}

  ## Questions

  If you want to know more, you can find me at: [${github}](www.github.com/${github})  
  And email questions to: ${email}.
`;

module.exports = generateMarkdown, renderLicense;