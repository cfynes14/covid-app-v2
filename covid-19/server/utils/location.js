let json = require('./localAuthorityBoundaries.json');


const Location = {
    search(localAuthority){
        let geoJson;
        let key;
        for(let i = 0; i < json['features'].length; i++){
            if (json['features'][i]['properties']['LAD17NM'] === localAuthority){
                coordinates = [json['features'][i]['properties']['LAT'], json['features'][i]['properties']['LONG']]
                geoJson = json['features'][i]['geometry'];
                key = [i]
            }           
        }
        return {geoJson, key, coordinates}
    }
}
   

module.exports = Location;