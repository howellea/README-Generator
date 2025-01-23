export const generateReadMe = ({ 
    title, 
    motivation, 
    projectReason, 
    problemSolved, 
    learn, 
    badge, 
    license, 
    username, 
    gitURL, 
    email 
}) => `
# ${title}

${badge} 

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- Motivation: ${motivation}
- Project Reason: ${projectReason}
- Problem Solved: ${problemSolved}
- What I Learned: ${learn}

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Add application installation instructions here.

Add setup development environment steps here.

1. Step 1
2. Step 2
3. ...Step [i]

## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.

## Tests

Provide instructions and examples for use. Include screenshots as needed.

## Credits

GitHub username: ${username}  
GitHub profile: [${gitURL}](${gitURL})

## Questions

For more questions, how to reach me with additional questions: [${gitURL}](${gitURL}) or email me at ${email}.
`;