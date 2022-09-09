import "bootstrap/dist/css/bootstrap.min.css";
import './modal.css'
import React from "react";

import Modal from './modal';
import InfoModal from './infoModal';
import LaModal from './LaModal';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      infoShow: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.showLaModal = this.showLaModal.bind(this);
    this.hideLaModal = this.hideLaModal.bind(this);
  }

  // componentWillUnmount(){
  //   if (this.props.currentInfections === undefined) {
  //     alert('Sorry, unable to access current statistics. Please try again later')
  //     return null
  //   } 
  // }
  
  showModal(){
    this.setState({ show: true });
  };

   hideModal(){
    this.setState({ show: false });
  };

  showInfo(){
    this.setState({ infoShow: true });
  }

  hideInfo(){
    this.setState({ infoShow: false });
  }

  showLaModal(){
    this.setState({ laShow: true });
  };

   hideLaModal(){
    this.setState({ laShow: false });
  };

 render(){
      return (
      <div id="modalButton" className="d-flex">
      <Modal show={this.state.show} handleClose={this.hideModal} 
        children={{ 
                    totalInfections: this.props.totalInfections.toLocaleString(), 
                    totalDeaths: this.props.totalDeaths.toLocaleString(),
                    newCases: this.props.newCases.toLocaleString(),
                    newDeaths: this.props.newDeaths.toLocaleString(),
                    cumFirstVaccinations: this.props.cumFirstVaccinations.toLocaleString(),
                    cumSecondVaccinations: this.props.cumSecondVaccinations.toLocaleString(),
                    firstVaccinationsDaily: this.props.firstVaccinationsDaily.toLocaleString(),
                    secondVaccinationsDaily: this.props.secondVaccinationsDaily.toLocaleString()
                 }}>
      </Modal>
      <LaModal show={this.state.laShow} handleClose={this.hideLaModal}
        children={this.props.regionalStats} laLocation={this.props.laLocation}
      >
                 
      </LaModal>
      <InfoModal show={this.state.infoShow} handleClose={this.hideInfo}>

      </InfoModal>
      <button id="la-button" className="dashButton btn btn-secondary" type="button" onClick={this.showLaModal}>LA Info</button>
      <button className="dashButton btn btn-secondary" type="button" onClick={this.showModal}>More national info</button>
      <button className="dashButton btn btn-secondary" type="button" onClick={this.showInfo}>App info</button>
    </div>
  );
  }
 };

export default Dashboard;