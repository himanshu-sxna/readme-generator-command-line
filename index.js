
const getReadmeInfo = require ("./modules/getReadmeInfo.js");
const axios = require("./modules/axios");
const writeFile = require("./modules/writeFile");

 const mainFunction = async () => {

    let userResponses = await getReadmeInfo.getReadmeInfo();

    console.log(userResponses);

}

mainFunction();
