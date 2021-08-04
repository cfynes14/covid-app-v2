// const axios = require("axios");

import axios from "axios";


const getData = async ( queries ) => {

    const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';

    const { data, status, statusText } = await axios.get(endpoint, { 
        params: queries,
        timeout: 10000 
    });

    if ( status >= 400 )
        throw new Error(statusText);

    return data

};  // getData


const main = async () => {

    const
        AreaType = "nation",
        AreaName = "england";

    const
        filters = [
            `areaType=${ AreaType }`,
            `areaName=${ AreaName }`
        ],
        structure = {
            date: "date",
            name: "areaName",
            code: "areaCode",
            cases: {
                new: "newCasesByPublishDate",
                cumulative: "cumCasesByPublishDate"
            },
            deaths: {
                new: "newDeathsByDeathDate",
                cumulative: "cumDeathsByDeathDate"
            }
        };


    const
        apiParams = {
            filters: filters.join(";"),
            structure: JSON.stringify(structure),
            latestBy: "newCasesByPublishDate"
        };

    const result = await getData(apiParams);

    // console.log(JSON.stringify(result));

};  // main


main().catch(err => {
    console.error(err);
    process.exitCode = 1;
});