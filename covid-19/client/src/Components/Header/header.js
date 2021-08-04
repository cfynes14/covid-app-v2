import React from 'react';
import './header.css';
import CurrentInfo from '../CurrentInfo/currentInfo';


class Header extends React.Component{
    state = {
        data: null
    };

      render(){
        return(
            <div id="header" className="w-100% bg">
                <h3 className="display-5 float-left">UK Covid-19 Tracker</h3>
                <CurrentInfo />                
            </div>      
        )
    }
}

export default Header;