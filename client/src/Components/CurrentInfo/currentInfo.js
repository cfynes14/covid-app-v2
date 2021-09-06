import React from 'react';
import './currentInfo.css';
import axios from 'axios';
import CountUp from 'react-countup';
import Dashboard from '../Modal/dashboard';

class CurrentInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            totalInfections: 0,
            totalDeaths: 0,
            newCases: 0,
            newDeaths: 0,
            cumFirstVaccinations: 0,
            cumSecondVaccinations: 0,
            firstVaccinationsDaily: 0,
            secondVaccinationsDaily: 0,
            countup: 0,
        }
        this.findTotal = this.findTotal.bind(this)        
    }


    findTotal = async () => {

        try {
            const response = await axios.get(`/national`)
            console.log(response)
            console.log(response.data.status)
            if (response.data.status === 200) {
                this.setState({ totalDeaths: response.data.today.deathsCumulative, 
                    totalInfections: response.data.today.casesCumulative,
                    newCases: response.data.today.casesDaily,
                    newDeaths: response.data.today.deathsDaily,
                    cumFirstVaccinations: response.data.yesterday.firstVaccinationsCumulative,
                    cumSecondVaccinations: response.data.yesterday.secondVaccinationsCumulative,
                    firstVaccinationsDaily: response.data.yesterday.firstVaccinationsDaily,
                    secondVaccinationsDaily: response.data.yesterday.secondVaccinationsDaily
                })
            } else {
                alert('Sorry, currently able to access national information. Please try again later.')
            }
            
        } catch(err) {
            alert('Sorry, currently able to access national information. Please try again later.')
            return
        }                   
    }

    componentDidMount() {
        window.onload = this.findTotal()
    }

    render(){
        return(
            <div className="pr-4 pt-2">
                <p className="headlineInfo mb-0 d-inline">Total infections: <span><CountUp end={this.state.totalInfections} duration={0.5} separator=','/></span></p>
                <p className="headlineInfo mb-0 d-inline">Total deaths: <span><CountUp end={this.state.totalDeaths} duration={0.5} separator=','/></span></p>

                <Dashboard totalInfections={this.state.totalInfections} 
                           totalDeaths={this.state.totalDeaths}
                           newCases={this.state.newCases}
                           newDeaths={this.state.newDeaths}
                           cumFirstVaccinations={this.state.cumFirstVaccinations} cumSecondVaccinations={this.state.cumSecondVaccinations} firstVaccinationsDaily={this.state.firstVaccinationsDaily} secondVaccinationsDaily={this.state.secondVaccinationsDaily}>
                </Dashboard>
            </div>
        )
    }
}


export default CurrentInfo;