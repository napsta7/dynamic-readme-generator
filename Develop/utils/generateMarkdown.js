// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(userLicense) {
  if (userLicense) { //Checks if there is a license
    return `## License Badge 
![badmath](https://img.shields.io/badge/License-${userLicense}-blue)` //Returns a string template literal for the generateMarkdown function to use
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(userLicense) { //Depending on which license the user chooses, this will return the corresponding link to that license
  if (userLicense === "MIT") {
    return '[MIT License](https://opensource.org/license/mit)';
  }
  else if (userLicense === "Apache") {
    return '[Apache License](https://www.apache.org/licenses/LICENSE-2.0)';
  }
  else if (userLicense === "BSD") {
    return '[BSD License](https://opensource.org/license/bsd-3-clause)';
  }
  else if (userLicense === "GPL") {
    return '[GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)';
  }
  else if (userLicense === "LGPL") {
    return '[LGPL License](https://www.gnu.org/licenses/lgpl-3.0.en.html)';
  }
  else if (userLicense === "AGPL") {
    return '[AGPL License](https://www.gnu.org/licenses/agpl-3.0.en.html)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(userLicense) {
  if (userLicense) { //Checks if there is a license
    return `## License

${userLicense}` //Returns a string template literal for the generateMarkdown function to create the section of the README
  }
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) { //This function contains the template for the README and contains string template literals for the user information
  return `# ${data.userTitle}

${renderLicenseBadge(data.userLicense)}

## Description

${data.userDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.userInstall}

## Usage

${data.userUsage}

${renderLicenseSection(data.userLicense)}
${renderLicenseLink(data.userLicense)}

## Contributing

${data.userContributing}

## Tests

${data.userTests}

## Questions

You can contact me on GitHub: [${data.userGitHub}](https://github.com/${data.userGitHub}) or via email: ${data.userEmail}.`
}

export default generateMarkdown;
