// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = " ";
  if (license && license.length) {
    licenseBadge = renderLicenseBadge
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License":
      return"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "Boost":
      return"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "BSD 3-Clause License":
      return"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case "BSD 2-Clause License":
      return"[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      break;
    case "CCO":
      return"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
      break;
    case "Eclipse Public License 1.0":
      return"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      break;
    case "GNU GPL v3":
      return"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;     
    case "GNU GPL v2":
      return"[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      break;
    case "GNU AGPL v3":
      return"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      break;
    case "GNU LGPL v3":
      return"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      break;
    case "GNU FDL v1.3":
      return"[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
      break;
    case "The Hippocratic License 2.1":
      return"License: Hippocratic 2.1 [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
      break;
    case "The Hippocratic License 3.0":
      return"License: Hippocratic 3.0 [![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
      break;
    case "IBM Public License Version 1.0":
      return"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      break;
    case "ISC License":
      return"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case "The MIT License":
      return"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Mozilla Public License 2.0":
      return"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Attribution License BY":
      return"[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
      break;
    case "Open Database License ODbL":
      return"[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
      break;
    case "Public Domain Dedication and License PDDL":
      return"[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
      break;
    case "The Perl License":
      return"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      break;
    case "The Artistic License 2.0":
      return"[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      break;
    case "SIL Open Font License 1.1":
      return"[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
      break;
    case "The Unlicense":
      return"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;
    case "WTFPL":
      return"[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
      break;
    case "The Zlib/Libpng License":
      return"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
      break;
    if (license === "") {
      return "";
    }     
  }

  
}

function generateMarkdown(data) {
  return `# ${data.title}`

  // Function to write README file function writeToFile(fileName, data) {}
  
  const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeToFile('./README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        } 
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

module.exports = generateMarkdown;
