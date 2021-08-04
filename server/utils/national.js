const axios = require("axios");

const National = {
    daily(){
        const endpoint = (
            'https://api.coronavirus.data.gov.uk/v1/data?%27%20+%20%27filters=areaType=nation;areaName=england;&%27%20+%20%27structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22}'
        );
        
        
        const getData = async ( url ) => {
        
            const { data, status, statusText } = await axios.get(url, { timeout: 10000 });
        
            if ( status >= 400 )
                throw new Error(statusText);
        
            return data
        
        };  
        

        const main = async () => {
        
        const result = await getData(endpoint);

        return result;

        };  // main
        
        
       return main().catch(err => {
            console.error(err);
            process.exitCode = 1;
        });
    }  
}


module.exports = National;