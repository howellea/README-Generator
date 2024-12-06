const generateMarkdown = {
  // Function to return a license badge based on which license is passed in
  // If there is no license, return an empty string
  renderLicenseBadge(license) {
    const licenses = {
      ISC: `https://img.shields.io/badge/License-ISC-blue.svg`,
      MIT: `https://img.shields.io/badge/License-MIT-yellow.svg`,
      Mozilla: `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`,
    };

    if (!license || !licenses[license]) {
      return ''; // Return empty string if no license or invalid license
    }
    return `![License Badge](${licenses[license]})`;
  },

  // Function to return the license link
  // If there is no license, return an empty string
  renderLicenseLink(license) {
    const licenseLinks = {
      ISC: `https://opensource.org/licenses/ISC`,
      MIT: `https://opensource.org/licenses/MIT`,
      Mozilla: `https://opensource.org/licenses/MPL-2.0`,
    };

    if (!license || !licenseLinks[license]) {
      return ''; // Return empty string if no license or invalid license
    }
    return licenseLinks[license];
  },

  // Function to return the license section of the README
  // If there is no license, return an empty string
  renderLicenseSection(license) {
    if (!license) {
      return ''; // Return empty string if no license
    }
    return `## License

This project is licensed under the [${license}](${this.renderLicenseLink(license)}) license.

${this.renderLicenseBadge(license)}`;
  },

  // Function to generate markdown for the README
  generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

${this.renderLicenseSection(data.license)}
`;
  },
};

export default generateMarkdown;