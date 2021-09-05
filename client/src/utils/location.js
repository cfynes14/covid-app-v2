//retrieves coordinates from location name

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

const apiKey = 'pk.eyJ1IjoiY2Z5bmVzMTQiLCJhIjoiY2tnaHdiOGExMDFycTMwcXJmaTY0YXEzMCJ9.QOIADwcIg642M87jdqPyFw&limit=1';

const Location = {
    search(address, error) {
        console.log(address)
        return fetch(url + encodeURIComponent(address) + '.json?access_token=' + apiKey)
        .then(response => {
             if (!response.ok) {
                throw error(response.statusText)
            }
            return response.json()})
        .then(jsonResponse => {
            let lng = jsonResponse.features[0].center[0];
            let lat = jsonResponse.features[0].center[1];
            return {lat, lng};
        }).catch(error => {
            console.log(error)
        });   
    }   
  }
    

export default Location;