// Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

import { questions } from './utils/questions.js';
import { generateReadMe } from './utils/generateReadMe.js';


// Create a function to write README file
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readMeContent = generateReadMe(answers);

    // Write the README.md file
    fs.writeFileSync('README.md', readMeContent);
    console.log("Great job! You created README.md!");
  } catch (err) {
    console.log("README was not created, try again!");
    console.error(err);
    process.exit(1);
  }
}

// Function call to initialize app
init();
