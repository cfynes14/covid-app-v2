import './modal.css';

const InfoModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="nationalStatTitle">
                     <h3>Info about UK Covid-19 Tracker</h3>
                </div>
                <br></br>
                <ul>
                    <li>UK Covid-19 Tracker is an app designed, developed and maintained by Christopher Fynes</li>
                    <li>All data rendered in this app is received from the UK Government Coronavirus api</li>
                    <li>All latest statistics are recorded from the previous day</li>
                    <li>No data available for deaths within Welsh Local Authorities</li>
                </ul>

                
                <br></br><br></br>
                <button className="btn btn-secondary btn-block" type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default InfoModal;