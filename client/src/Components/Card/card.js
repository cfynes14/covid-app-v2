import React from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/searchBar';
import CountUp from 'react-countup';
import formatDate from '../../utils/formatDate';

import './card.css';

class Card1 extends React.Component{
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
          const response = await axios.get('http://localhost:5000/getLAdata', { params: {location}})
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
    <div id="card1" className="card w-25 z-index-3 m-5 border border-info shadow p-3 rounded">
        <div className="card-body">
              <SearchBar searchLocation={this.props.searchLocation} findInfo={this.findInfo} />
              <div className="container">
                  <div className="textInfo">
                    <p className="cardInfo">Total infections: <span><CountUp end={this.state.cumCases} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">Total deaths: <span><CountUp end={this.state.cumDeaths} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">New cases on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span><CountUp end={this.state.newCases} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">New deaths on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span><CountUp end={this.state.newDeaths} duration={0.5} separator=','/></span></p>
                </div>
              </div>
         </div>            
    </div>
        )
    }
}

export default Card1;