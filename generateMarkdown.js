//Function to generate license depending on user choice and create appropriate badge with link to license
let renderLicense = (license) => {
  let licenseBadge = "";
  //Switch statement to compare user input to values
  switch(license.license){
    case "Apache 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case "Boost Software License 1.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
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
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unlicense":
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)";
      break;
      default:
      licenseBadge = "";
  }
  return licenseBadge;
}

//Function to create markdown file and populate with user inputs, retrieved via object destructuring
const generateMarkdown = ({ title, license, description, installation, usage, contribution, test, github, email }) =>
`# ${title} 

${renderLicense({ license })}

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

If you want to know more, you can find me at: [${github}](https://www.github.com/${github})  
And email questions to: ${email}.`;

//Export functions to be used in index.js
module.exports = generateMarkdown, renderLicense;