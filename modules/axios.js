const axios = require ("axios"); 

module.exports = {

    getGitInfo: async (userName) => {

        try{
            let apiResponse =  await axios.get(`https://api.github.com/users/${userName}`);
            console.log(apiResponse.data.login);
        } catch (error) {
            console.error(error);
         } 
    }
}

