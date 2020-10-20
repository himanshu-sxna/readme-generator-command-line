/* call the Github API and ftech userinfo for the Readme */

const axios = require ("axios"); 

module.exports = {

    getGitInfo: async (userName) => {

        try{
            let apiResponse =  await axios.get(`https://api.github.com/users/${userName}`);
            return apiResponse;
            
        } catch (error) {
            console.error(error);
         } 
    }
}

