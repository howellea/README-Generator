const licenses = {
  ISC: 'ISC',
  MIT: 'MIT',
  Mozilla: 'Mozilla',
};

export const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?', // title of your project: README
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?', // What motivated you to create this project?
  },
  {
    type: 'input',
    name: 'projectReason',
    message: 'Why did you build this project?', // Reason for building the project
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: 'What problem does it solve?', // Describe the problem your project addresses
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn and how was it built?', // Insights gained and technology used
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
  {
    type: 'input',
    name: 'gitURL',
    message: 'Enter your GitHub repository URL.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: Object.keys(licenses), // Ensure licenses is defined somewhere in your code
  },
]
