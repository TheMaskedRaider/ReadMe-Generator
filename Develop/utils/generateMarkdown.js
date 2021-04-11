// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseSection = data.license[0];
  let userLicense = ''
  if (licenseSection === 'Apache') {
    userLicense = `![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)`
  } else if (licenseSection === 'GPLv3') {
    userLicense = `![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseSection === 'MIT') {
    userLicense = `![License: MIT](https://img.shields.io/badge/License-MIT%201.0-red.svg)`
  } else if (licenseSection === 'Mozilla') {
    userLicense = '![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-orange.svg)'
  } else {
    userLicense = '';
  }
  return userLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = data.license[0];
  let userLink = '';
  if (licenseLink === 'Apache') {
    userLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`
  } else if (licenseLink === 'GPLv3') {
    userLink = `<a href = "https://opensource.org/licenses/GPL-3.0">License Link</a>`
  } else if (licenseLink === 'MIT') {
    userLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
  } else if (licenseLink === 'Mozilla') {
    userLink = `<a href = "https://opensource.org/licenses/MPL-2.0">License Link</a>`
  } else {
    userLink = '';
  }
  return userLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSection = data.license[0];
  let userSection = ''
  if(licenseSection === 'Apache') {
    userSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`

  } else if(licenseSection === 'GPLv3') {
    userSection = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`

  } else if(licenseSection === 'MIT') {
    userSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide </a>`

  }else if(licenseSection === 'Mozilla') {
   userSection = `<a href = "https://github.com/IQAndreas/markdown-licenses/blob/master/mpl-v2.0.md">Mozilla Guide</a>`

  } else {
    userSection = 'N/A'
  }
  return userSection;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badge: ${renderLicenseBadge(data)}
  ## Table of Contents:
    1. [Description](#description)
    2. [License](#license)
    3. [Installation](#installation)
    4. [Usage](#usage)
    5. [Features](#features)
    6. [Contribute](#contribute)
    7. [Test](#test)
    8. [Questions](#questions)
    9. [Credits](#credits)
  ## Description:
  ${data.description}
  ## Licenses:
  1. Your Badge: ${renderLicenseBadge(data)}
  2. Your Badge link: ${renderLicenseLink(data)}
  3. Your Badge Readme: ${renderLicenseSection(data)}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Features:
  ${data.features}
  ## Contribute:
  ${data.contribute}
  ## Test:
  ${data.test}
  ## Questions:
  1. Please click the link for Github: <a href = "https://github.com/${data.questions}">My Github Site</a>
  2. Please click the link for my Website: <a href = "${data.questions2}">My Website</a>
  3. Email: ${data.questions3} 
  ## Credits:
  ${data.credits}
  `;
}

module.exports = generateMarkdown;
