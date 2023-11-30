# Node.js README Generator

## Description

This application was created to dynamically create a README.md file, populated by users' input in their command line using node.js. This allows developers time to focus more on coding!  
After typing `node index.js` into their command line, the user is presented with a series of prompts, dictated by an array of question objects. The responses are used in the `generateMarkdown` function using 'object destructuring' in 'template literals' for a basic README skeleton. Most types are that of `input`, but the question of 'license' brings a series of licenses (source for popular license choices in 'Sources'); the function `renderLicense` runs a `switch statement` to compare the returned `string`, and generates a badge and link accordingly (link for pre-made badges in Sources). The file is then written!  
This was a great introduction to node and the concept of modularization, splitting up the process into separate files and bringing them together in one main `index.js`. It also was good practice for longer README styling, and some extra spaces and indentation went a long way to disrupt my 'Table of Contents'!

## Table of Contents
- [Installation](#installation)  
- [Usage](#usage)  
- [Tests](#tests)   

## Installation

Please ensure you have downloaded and installed the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

## Usage

![User inputs key-words into search bar, results matching that are displayed. Recipe ingredients and instructions are translated into different languages. The search bar aut-completes previously searched words](./assets/images/Screen-recording-demo.gif)

## Sources
- https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d
- https://choosealicense.com/licenses/
- https://guides.lib.umich.edu/c.php?g=778460&p=5582813
- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

