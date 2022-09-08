const axios = require("axios");

// API changed the frequency of updates
const lastWeek = (new Date(Date.now() - 691200000)).toISOString().split("T")[0];

console.log("LAST WEEK", lastWeek)

const localAuthorityData = (location) => {
    
    const getData = async ( queries ) => {

        const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';

        const result = await axios.get(endpoint, {
            params: queries,
            timeout: 10000
        });

        return result
    
    };  
    

    const main = async () => {

        const
            filters = [
                
                `areaType=ltla`,
                `areaName=${ location.location }`,
                `date=${lastWeek}`,
        
            ],

            structure = {
                "date": "date",
                // "name": "areaName",
                // "code": "areaCode",
                "dailyCases": "newCasesByPublishDate",
                "cumulativeCases": "cumCasesByPublishDate",
                "dailyDeaths": "newDeaths28DaysByPublishDate",
                "cumulativeDeaths": "cumDeaths28DaysByPublishDate"
            };

        console.log("FILTERS", filters)
    
        const
            apiParams = {
                filters: filters.join(";"),
                structure: JSON.stringify(structure),
            };
    
        const result = await getData(apiParams);
    
        console.log("RESULT", result.data.data)

        return result
    
    };
    
    
    // main().catch(err => {
    //     console.error(err);
    //     process.exitCode = 1;
    // });
    
   return main().catch(err => {
    ({status: 500, statusText: err.response})
    });

}

module.exports = localAuthorityData;