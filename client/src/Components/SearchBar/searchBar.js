import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           names: [],
           area: '',

        }
        
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        this.obtainNames()
        .then(res => this.setState({ names: res }))
        .catch((err) => {
            console.log(err)
            alert('Sorry, unable to communicate with the server. Please try again later.')
        })
    }

    obtainNames = async () => {
        const response = await fetch('/localAuthorities')
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }


handleLocationChange(){
    this.props.searchLocation(this.state.area);
}

handleGetLAInformation(){
    this.props.findInfo(this.state.area)
}


handleChange(e){   
    this.setState({ area: e.target.value },() => {
        this.handleLocationChange()
        this.handleGetLAInformation()
    });
}

    render(){
        let names = this.state.names
        let optionTemplate = names.map(v => (
            <option id={v.id} value={v.value}>{v.value}</option>
        ));
        return(
            <div>             
                <label for="searchBar"> 
                    <select className="form-control" name="localAuthority" onChange={this.handleChange}>
                        <option>Select an area</option>
                        {optionTemplate}
                    </select>
                </label>
            </div>
            
        )
    }
}

export default SearchBar;