// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  const licenseBadgeUrls = {
    'MIT': 'https://img.shields.io/badge/license-MIT-green',
    'Apache-2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue',
    'GPL-3.0': 'https://img.shields.io/badge/license-GPL%203.0-blue',
  };

  if (licenseBadgeUrls.hasOwnProperty(license)) {
    return `![License Badge](${licenseBadgeUrls[license]})`;
  } else if (license) {
    return 'License badge not available';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
  };

  if (licenseLinkUrls.hasOwnProperty(license)) {
    return `[License Link](${licenseLinkUrls[license]})`;
  } else if (license) {
    return 'License link not available';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLinkUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL-3.0': 'https://opensource.org/licenses/GPL-3.0',
  };

  if (licenseLinkUrls.hasOwnProperty(license)) {
    return `## License

This project is licensed under the [${license} License](${licenseLinkUrls[license]}).`;
  } else {
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(reply) {

let preMarkdown =   
  `# ${reply.title}

  ## Description
  ${reply.description}`

let tableOfContents = `

## Table of Contents`

  if (reply.installation !== '') {tableOfContents += 
  `
  - [Installation](#installation)`}

  if (reply.usage !== '') {tableOfContents += 
  `
  - [Usage](#usage)`}

  if (reply.credits !== '') {tableOfContents +=
  `
  - [Credits](#credits)`}

  if (reply.license !== '') {tableOfContents +=
  `
  - [License](#license)`}

  if (reply.features !== '') {tableOfContents +=
  `
  - [Features](#features)`}

  if (reply.contribution !== '') {tableOfContents +=
  `
  - [Contributing](#contributing)`}

  if (reply.tests !== '') {tableOfContents +=
  `
  - [Tests](#tests)`}

preMarkdown += tableOfContents;

if (reply.installation !== '') {
  preMarkdown += 
  `

  ## Installation
  
  ${reply.installation}`
}

if (reply.usage !== '') {
  preMarkdown +=
  `

  ## Usage

  ${reply.usage}`
}

if (reply.credits !== '') {
  preMarkdown +=
  `

  ## Credits

  ${reply.credits}`
}

if (reply.license !== '') {
  preMarkdown +=
  `

  ## License

  ${reply.license}

  ${renderLicenseBadge(reply.license)}

  ${renderLicenseSection(reply.license)}`
}

if (reply.features !== '') {
  preMarkdown +=
  `
  ## Features
  
  ${reply.features}`
}

if (reply.contribution !== '') {
  preMarkdown +=
  `

  ## Contributing

  ${reply.contribution}`
}

 if (reply.tests !== '') {
  preMarkdown +=
  `
  
  ## Tests

  ${reply.tests}`
 }

return preMarkdown;
}

module.exports = generateMarkdown;
