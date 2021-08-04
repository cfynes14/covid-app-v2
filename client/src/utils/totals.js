const Total = {
    search(){
        return fetch("https://covid-19-uk-data-by-zt.p.rapidapi.com/GetUKTotalCounts", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a43dcbe605mshbd9068b7ca09398p1b0658jsndae6b6dcb0f8",
                "x-rapidapi-host": "covid-19-uk-data-by-zt.p.rapidapi.com"
            }
        })
        .then(response => {
            return response.json().then(jsonResponse => {
             //   console.log(jsonResponse)
            let totalInfections = jsonResponse.data[0].confirmed;
            let totalDeaths = jsonResponse.data[0].deaths

         //   console.log({totalInfections, totalDeaths})
            return {totalInfections, totalDeaths};
            })
        })
        .catch(err => {
            console.error(err);
        });   
     }
}


export default Total;



//     