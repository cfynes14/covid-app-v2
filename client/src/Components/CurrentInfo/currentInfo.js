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
        const response = await axios.get(`http://localhost:${process.env.PORT}/national`)
        console.log(response.status)
        if (response.status !== 200){
            alert('Sorry, currently able to access national information. Please try again later.')
            return
        } else {
            console.log(response)
            this.setState({ totalDeaths: response.data.data[0].deathsCumulative, 
                            totalInfections: response.data.data[0].casesCumulative,
                            newCases: response.data.data[0].casesDaily,
                            newDeaths: response.data.data[0].deathsDaily,
                            cumFirstVaccinations: response.data.data[1].firstVaccinationsCumulative,
                            cumSecondVaccinations: response.data.data[1].secondVaccinationsCumulative,
                            firstVaccinationsDaily: response.data.data[1].firstVaccinationsDaily,
                            secondVaccinationsDaily: response.data.data[1].secondVaccinationsDaily
                        })
        }
    }

    componentDidMount() {
        window.onload = this.findTotal()
    }

    render(){
        return(
            <div className="pr-4 pt-2">
                <p className="headlineInfo mb-0 d-inline">Total infections in UK: <span><CountUp end={this.state.totalInfections} duration={0.5} separator=','/></span></p>
                <p className="headlineInfo mb-0 d-inline">Total deaths in UK: <span><CountUp end={this.state.totalDeaths} duration={0.5} separator=','/></span></p>

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