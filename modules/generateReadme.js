// Generate the markup of the Readme file based on the answers for the inquirer prompy and axios API response data
module.exports = {

    generateReadme: (inquirerResponse, axiosResponse) => {

        // markdown for Table of Contents
        let tableOfContents = `## Table of Contents \n\n- [Description](#description)\n- [License](#license)\n`;

        //Only add sections to Table of Contents if user responses are present for inquirer prompts
        if (inquirerResponse.install !== ""){
            tableOfContents += `- [Installation](#installation)\n`
        };

        if (inquirerResponse.usage !== ""){
            tableOfContents += `- [Usage](#usage)\n`
        };

        if (inquirerResponse.tets !== ""){
            tableOfContents += `- [Tests](#tests)\n`
        }

        tableOfContents += `- [Developer Info](#devInfo)\n\n`;

        // Markdown for Readme file
        let readmeFile = 
            `# ${inquirerResponse.title}\n\n![License Badge](https://img.shields.io/badge/license-${inquirerResponse.license}-green)\n\n\n`

            readmeFile += tableOfContents;

            readmeFile+= `## <a name="description"></a>Description\n\n${inquirerResponse.desc}\n\n\n## <a name="license"></a>License\n${inquirerResponse.license}\n`;

            // Only add sections to readme if the user has provided a response 
            if (inquirerResponse.install !== '') {
  
                readmeFile +=`## <a name="installation"></a>Installation\n\n${inquirerResponse.install}\n\n\n`
                };

            if (inquirerResponse.usage !== '') {
  
                readmeFile +=`## <a name="usage"></a>Usage\n\n${inquirerResponse.usage}\n\n\n`
                };

            if (inquirerResponse.tests !== '') {
  
                readmeFile +=`## <a name="tests"></a>Tests\n\n${inquirerResponse.tests}\n\n\n`
                };
        
        // Markdown for The developer Info section, based on axios response data
        let devInfo = `## <a name="devInfo"></a> Developer Info\n\nGithub: [@${axiosResponse.data.login}](https://github.com/${axiosResponse.data.login})\n`;

                if (axiosResponse.data.email !== null){
                    devInfo += `Email: ${axiosResponse.data.email}`;
                }
                
        readmeFile += devInfo;

        return readmeFile;
    }
} 