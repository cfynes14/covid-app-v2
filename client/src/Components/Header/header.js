import React from 'react';
import './header.css';
import CurrentInfo from '../CurrentInfo/currentInfo';
import SearchBar from '../SearchBar/searchBar'


class Header extends React.Component{
    state = {
        data: null
    };

      render(){
        return(
            <div id="header" className="w-100% bg d-flex">
                <h3 className="displayText display-5 float-left">UK Covid-19 Tracker</h3>
                <CurrentInfo />
                <div className="mobileSelect">
                <SearchBar searchLocation={this.props.searchLocation} findInfo={this.findInfo} />         
                </div>    
            </div>      
        )
    }
}

export default Header;