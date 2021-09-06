import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Map from '../Map/map';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cumCases: 0,
        cumDeaths: 0,
        newCases: 0,
        newDeaths: 0
    };
    this.findInfo = this.findInfo.bind(this)
  }

  findInfo = async (location) => {
    const response = await axios.get(`/getLAdata`, { params: {location}})
    if (response.status !== 200){
      throw Error(response.message)
  } else {
      this.setState({ cumCases: response.data.data[0].cumCasesByPublishDate,
                      cumDeaths: response.data.data[0].cumDeaths28DaysByPublishDate, 
                      newCases: response.data.data[0].newCasesByPublishDate,
                      newDeaths: response.data.data[0].newDeaths28DaysByPublishDate 
                  })
  }
}

  render(){
    return (
      <div>       
        <Map findInfo={this.findInfo} regionalStats={this.state}/>      
      </div>     
    )
  }
}


export default App;
