
import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import axios from 'axios';

import Header from '../Header/header'
import Card1 from '../Card/card';

function Map() {

  const [map, setMap] = useState(null);
  const [locationVal, setLocation] = useState('');
 // const [coords, setCoords] = useState();
  const [geoJson, setGeoJson] = useState(null);
  const [key, setKey] = useState(0)
       
     const searchLocation = async (location) => {
        setLocation(location)
        const response = await axios.get(`/location`, { params: {location} })
        if (response.status !== 200){
            throw Error(response.message)
        } else {
            setGeoJson(response.data.geoJson)
            setKey(response.data.key)
            map.setView(response.data.coordinates, 9)
            } 
      } 
      
         
        const ReturnGeoJson = () => {          
          return geoJson && (
            <GeoJSON data={geoJson} key={key}
            />
          )
      }

        return(
        <div>
          <Header />
      <MapContainer id="mapContainer" zoomControl={false} center={[51.5074, .1278]} zoom={6.5} whenCreated={setMap}>
            <Card1 searchLocation={searchLocation} location={locationVal}/>
            <TileLayer
            url="https://api.maptiler.com/maps/uk-openzoomstack-road/256/{z}/{x}/{y}.png?key=X7qpq0iR5R376h5yMZXo" 
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />

            {ReturnGeoJson()}
           
        </MapContainer>
        </div>
        
                    
   )
}

export default Map;