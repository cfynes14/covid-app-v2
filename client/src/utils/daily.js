import React from 'react';

const axios = require("axios");


const formatDate = () => {
    //Current date
    let date = new Date().toLocaleDateString('en', {year:'numeric', month: '2-digit', day: '2-digit'});
    //Extracting relevant data
    let month = date.slice(0,2);
    let day = date.substring(3,5);
    let year = date.substring(6,10);
    
    return [day, month, year].join('-');
}

console.log(formatDate());

let date = formatDate();

//ENDPOINT

const endpoint = (
    
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    `structure={"date":"${date}","newCases":"newCasesByPublishDate"}`
);


const getData = async ( url ) => {

    const { data, status, statusText } = await axios.get(url, { timeout: 10000 });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData


const main = async () => {

    const result = await getData(endpoint);

    return result.data[0];
    

};  // main


main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});



 export default Daily;