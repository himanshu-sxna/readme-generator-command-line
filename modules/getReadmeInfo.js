// inquirer module function tio ask user for readme info 
const inquirer = require ("inquirer");

module.exports = {

    getReadmeInfo: () => {

        const criteriaPrompts = [
            {
                name: "title",
                type: "input",
                message: "Please enter the title for your Readme file:",
                default: "My Project",
                suffix: "  Default value:"
              },
              {
                name: "desc",
                type: "input",
                message: "Description for your repo/project:",
                // the description must not be blank or no response
                validate: (input) => {
                        if (input.length < 1 ) {
                            console.log("A valid project description is required")
                        } else {
                            return true;
                        }
                }
              },
              {
                  name: "install",
                  type: "input",
                  message: "Please enter installation instructions for the user: ",
              },
              {
                  name: "usage",
                  type: "input",
                  message: "Instructions and examples of use:", 
                  suffix: " If applicable"
                
              },
              {
                  name: "tests",
                  type: "input",
                  message: "Tests for application:",
                  suffix: " If applicable"
              },
              {
                  name: "license",
                  type: "list",
                  message: "Choose the license for your project",
                  choices: ["MIT", "GNU General Public License", "Open Software License"]
              },
              {
                  name: "user_name",
                  type: "input",
                  message: "enter your Github username",
                  // the Github username cannot be blank
                  validate: (input) => {
                    if (input.length < 1 ) {
                        console.log("Please enter your username")
                    } else {
                        return true;
                    } 
                    }
              }
        ];
    
         return inquirer.prompt(criteriaPrompts);
    }
}


