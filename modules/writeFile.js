const fs = require('fs');

module.exports = {

    writeFile: (fileData) => {

        fs.writeFile("demoReadme.md", fileData, (err) => {

            if (err) {
                console.log(err);
            } else {
                console.log("Your Readme is ready!");
            }
        })

    }
}