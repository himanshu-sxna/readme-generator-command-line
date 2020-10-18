
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
                  message: "enter your Github username"
              },
              {
                  name: "table_of_contents",
                  type: "confirm",
                  message: "Would you like to include a table of contents ?",
                  suffix: "  It is recommended that you do"
              },
              {
                name: "badges",
                type: "confirm",
                message: "Please write what badges ",
              }
        ];
    
         return inquirer.prompt(criteriaPrompts);
    }
}


