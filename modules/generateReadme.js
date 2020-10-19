
module.exports = {

    generateReadme: (inquirerResponse, axiosResponse) => {


        let tableOfContents = `## Table of Contents
            
                                            - [Descriptiion(#description)
                                            -[License](#license)`;

        if (inquirerResponse.install !== ""){
            tableOfContents += `-[Installation](#installation)`
        };

        if (inquirerResponse.usage !== ""){
            tableOfContents += `-[Usage](#usage)`
        };

        if (inquirerResponse.tets !== ""){
            tableOfContents += `-[Tests](#tests)`
        }

        tableOfContents += `-[Developer Info](#devInfo)`;

        let readmeFile = 
            `# ${inquirerResponse.title}

            ![License Badge](https://img.shields.io/badge/license-${inquirerResponse.license}-green)`

            readmeFile += tableOfContents;

            `## <a name="description"></a>Description

            ${inquirerResponse.desc}
            
            ## <a name="license"></a>License
            
            ${inquirerResponse.license}`

            if (inquirerResponse.install !== '') {
  
                readmeFile +=`
                ## <a name="installation"></a>Installation
                
                *Steps required to install project and how to get the development environment running:*
                
                ${inquirerResponse.install}`
                };

                if (inquirerResponse.usage !== '') {
  
                    readmeFile +=`
                    ## <a name="usage"></a>Usage
            
                    
                    ${inquirerResponse.usage}`
                    };

                    if (inquirerResponse.tests !== '') {
  
                        readmeFile +=`
                        ## <a name="tests"></a>Tests
                        
                        ${inquirerResponse.tests}`
                        };
        
                        readmeFile += `## <a name="devInfo> Developer Info`;

        return readmeFile;
    }
}