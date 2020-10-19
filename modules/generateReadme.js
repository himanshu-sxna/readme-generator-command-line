
module.exports = {

    generateReadme: (inquirerResponse, axiosResponse) => {


        let tableOfContents = `## Table of Contents \n\n- [Descriptiion(#description)\n-[License](#license)\n`;

        if (inquirerResponse.install !== ""){
            tableOfContents += `-[Installation](#installation)\n`
        };

        if (inquirerResponse.usage !== ""){
            tableOfContents += `-[Usage](#usage)\n`
        };

        if (inquirerResponse.tets !== ""){
            tableOfContents += `-[Tests](#tests)\n`
        }

        tableOfContents += `-[Developer Info](#devInfo)\n\n`;

        let readmeFile = 
            `# ${inquirerResponse.title}\n\n![License Badge](https://img.shields.io/badge/license-${inquirerResponse.license}-green)\n\n\n`

            readmeFile += tableOfContents;

            readmeFile+= `## <a name="description"></a>Description\n\n${inquirerResponse.desc}\n\n\n## <a name="license"></a>License\n${inquirerResponse.license}\n`;

            if (inquirerResponse.install !== '') {
  
                readmeFile +=`## <a name="installation"></a>Installation\n\n${inquirerResponse.install}\n\n\n`
                };

                if (inquirerResponse.usage !== '') {
  
                    readmeFile +=`## <a name="usage"></a>Usage\n\n${inquirerResponse.usage}\n\n\n`
                    };

                    if (inquirerResponse.tests !== '') {
  
                        readmeFile +=`## <a name="tests"></a>Tests\n\n${inquirerResponse.tests}\n\n\n`
                        };
        
                        readmeFile += `## <a name="devInfo> Developer Info\n\n`;

        return readmeFile;
    }
}