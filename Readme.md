# Command Line Readme Generator

https://img.shields.io/badge/license-MIT-green

This is a command-line application that runs with Node.js, it dynamically generates a README.md file based on user input.

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Developer Info](#developer-info)
  

## <a name="installation"></a>Installation

To generate your own README, first run `npm install` in order to install the npm package dependencies as specified in the `package.json`

The application itself can be invoked with `node index.js`.


## <a name="usage"></a>Usage 

![Gif demo of README-generator](readme-demo.gif)

When you run `node index.js`, the application uses the `inquirer` package to prompt the user  with a series of questions about about their project.

The application then takes the responses and uses `axios` to fetch the user's GitHub profile from the [GitHub API](https://developer.github.com/v3/).
It will then generate markdown and a table of contents for the README based on user responses to the prompts.
The README will also include a badge for the license type specified.

Finally, `fs.writeFile` is used to generate the README.md file.  
Check out the [`ExampleREADME.md`](https://github.com/connietran-dev/readme-generator/blob/master/ExampleREADME.md) in this repo as an example. 


## <a name="license"></a>License

MIT License

---

## <a name="developer-info"></a>Developer Info

 Feel free to contact me withwith any questions:

GitHub: [@himanshu-sxna](https://api.github.com/users/himanshu-sxna)

Email: contact@hellohimanshu.com


