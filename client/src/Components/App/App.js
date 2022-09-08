import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Map from '../Map/map';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cumCases: '',
        cumDeaths: '',
        newCases: '',
        newDeaths: '',
    };
    this.findInfo = this.findInfo.bind(this)
  }

  findInfo = async (location) => {
    try {
    const response = await axios.get(`/getLAdata`, { params: {location}})
  
    if (response.status !== 200){
      alert(`Sorry, cannot access information for ${location} right now. Please try again later.`)
  } 
    for (const [key, value] of Object.entries(response.data[0])) {
        if (value === null) {
          response.data[0][key] = "Waiting for up to date information"
        }
    }   
      this.setState({ cumCases: response.data[0].cumulativeCases.toString(),
                      cumDeaths: response.data[0].cumulativeDeaths.toString(), 
                      newCases: response.data[0].dailyCases.toString(),
                      newDeaths: response.data[0].dailyDeaths.toString(), 
                  })
  

    } catch(e) {
      console.log(e)   
    }
    
    
}

  render(){
    return (
      <div>       
        <Map findInfo={this.findInfo} regionalStats={this.state} laLocation={this.state.laLocation}/>      
      </div>     
    )
  }
}


export default App;
