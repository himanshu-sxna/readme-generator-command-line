
const getReadmeInfo = require ("./modules/getReadmeInfo.js");
const axios = require("./modules/axios");
const generateReadme = require("./modules/generateReadme");
const writeFile = require("./modules/writeFile");

 const mainFunction = async () => {

    let getUserResponses = await getReadmeInfo.getReadmeInfo();

    let getUserGitId = (getUserResponses.user_name);

    let getUserGitInfo = await axios.getGitInfo(getUserGitId);

    let getFileContents = await generateReadme.generateReadme(getUserResponses, getUserGitInfo);

    writeFile.writeFile(getFileContents);


}

mainFunction();
