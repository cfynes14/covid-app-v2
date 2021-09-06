import React from 'react';
// import axios from 'axios';
import SearchBar from '../SearchBar/searchBar';
import CountUp from 'react-countup';
import formatDate from '../../utils/formatDate';

import './card.css';

// class Card1 extends React.Component{

    function Card1(props){
        return (            
    <div id="card1" className="card w-25 z-index-3 m-5 border border-info shadow p-3 rounded">
        <div className="card-body">
                <SearchBar searchLocation={props.searchLocation} findInfo={props.findInfo} />
                <div className="container">
                    <div className="textInfo">
                    <p className="cardInfo">Total infections: <span><CountUp end={props.regionalStats.cumCases} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">Total deaths: <span><CountUp end={props.regionalStats.cumDeaths} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">New cases on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span><CountUp end={props.regionalStats.newCases} duration={0.5} separator=','/></span></p>
                    <p className="cardInfo">New deaths on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span><CountUp end={props.regionalStats.newDeaths} duration={0.5} separator=','/></span></p>
                </div>
                </div>
            </div>            
        </div>
        )
}    
    


export default Card1;