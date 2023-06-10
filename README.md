# Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 
Note taking application  that can be used to write and save notes.

It uses an Express.js back end and saves and retrieves note data from a db JSON file. Uses fs module to store and retrieve notes. 

It was developed with the intention of making the process of organizing one's ideas and To Do's easier. 


## Table of Contents 
* [Important Links](#important-links)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#tests-instructions)
* [Questions](#questions)

## Important Links 
* [Github Repository]
* [Walthrough Video]


## Installation Instructions
To use this application, you must have Node.js v16 installed. <br/>
You must also install inquirer in the project by using: *npm i inquirer@8.2.4* in the command line, as well as *npm i inquirer-maxlength-input-prompt*. And finally, to install Jest: *npm i jest*


## Usage Information
Once all dependencies are installed (See *package.json*), you can invoke que application by the following command: <br/>
*node index.js* <br/>
You will be asked to provide the initials for the logo, the text color, the shape (circle, triangle, square) and the shape fill. After all the questions are answered, an SVG file will bewill be generated inside the *examples* folder. 

## License
This application is covered under the MIT License. For more info, click here: [License: MIT](https://opensource.org/licenses/MIT)

## Contribution Guidelines
Not Applicable

## Tests Instructions
Tests for the classes within the *shapes.js* file, in the folder *lib* were developed and can be found in the same folder. These test make sure the right string is generated when certain parameters are given to a new instance of the classes. To run these tests, enter *npm run test* in the terminal. 

## Questions
 If you have any questions, please contact me through email at: ximenacuu@gmail.com  <br/>
To see more of my work, see my Github profile: [Ximenacu](https://github.com/Ximenacu);
