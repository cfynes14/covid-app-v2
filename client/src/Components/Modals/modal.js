import './modal.css';
import formatDate from '../../utils/formatDate';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="nationalStatTitle">
                     <h3>National Statistics for UK</h3>
                </div>
                <br></br>
                <p className="nationalStat">Total infections: <span>{children.totalInfections}</span></p>
                <p className="nationalStat">Total deaths: <span>{children.totalDeaths}</span></p>
                <p className="nationalStat">New infections: <span>{children.newCases}</span></p>
                <p className="nationalStat">New deaths: <span>{children.newDeaths}</span></p>
                <p className="nationalStat">Total first vaccinations: <span>{children.cumFirstVaccinations}</span></p>
                <p className="nationalStat">Total second vaccinations: <span>{children.cumSecondVaccinations}</span></p>
                <p className="nationalStat">First vaccinations received on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span>{children.firstVaccinationsDaily}</span></p>
                <p className="nationalStat">Second vaccinations received on {formatDate((new Date(Date.now() - 86400000)).toISOString().split("T")[0])}: <span>{children.secondVaccinationsDaily}</span></p>

                
                <br></br><br></br>
                <button className="btn btn-secondary btn-block" type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default Modal;