const axios = require("axios");

const yesterday = (new Date(Date.now() - 86400000)).toISOString().split("T")[0];

const localAuthorityData = (location) => {

    const endpoint = `https://api.coronavirus.data.gov.uk//v1/data?filters=date=${yesterday};areaName=${location.location};areaType=ltla&structure={%22date%22:%22date%22,%22name%22:%22areaName%22,%22code%22:%22areaCode%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumCasesByPublishDate%22:%22cumCasesByPublishDate%22,%22newDeaths28DaysByPublishDate%22:%22newDeaths28DaysByPublishDate%22,%22cumDeaths28DaysByPublishDate%22:%22cumDeaths28DaysByPublishDate%22}`
    
    const getData = async ( url ) => {

        try {
            return await axios.get(url, {timeout: 5000});
        } catch(e) {
            return({status: 500, statusText: e.response.statusText})
        }
    
    };  
    

    const main = async () => {
    
    const result = await getData(endpoint);
    return result;

    }; 
    
    
   return main().catch(err => {
        return err
    });

}

module.exports = localAuthorityData;