
const getReadmeInfo = require ("./modules/getReadmeInfo.js");
const axios = require("./modules/axios");
const writeFile = require("./modules/writeFile");

 const mainFunction = async () => {

    let userResponses = await getReadmeInfo.getReadmeInfo();

    let userGitId = userResponses.user_name;

    axios.getGitInfo(userGitId);

}

mainFunction();
