const axios = require("axios");
const { response } = require("express");

const National = {
    daily(){
        const endpoint = (
            'https://api.coronavirus.data.gov.uk/v1/data?%27%20+%20%27filters=areaType=nation;areaName=england;&%27%20+%20%27structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22}'

            // "https://api.coronavirus.data.gov.uk/v1/data"
        );
        
        
        const getData = async ( url ) => {
        
            try {
                return await axios.get(url, {timeout: 5000});                
            } catch(e) {
                return({status: 500, statusText: e.response.statusText})
            }        
        };  
        

        const main = async () => {
        
        const result = await getData(endpoint);
        if (result.status == 200){
            return {
                    status: 200, 
                    today: result.data.data[0],
                    yesterday: result.data.data[1]
                }
            } 
            return result
    };
      
    
        
       return main().catch(err => {
            return err

        //    process.exitCode = 1;
        });
    }  
}


module.exports = National;