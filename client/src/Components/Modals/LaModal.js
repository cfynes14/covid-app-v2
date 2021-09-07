import './modal.css';

const LaModal = ({ handleClose, show, children, props }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="nationalStatTitle">
                     <h3>LA Statistics for </h3>
                </div>
                <br></br>
                <p className="nationalStat">Total infections: <span>{children.cumCases.toLocaleString()}</span></p>
                <p className="nationalStat">Total deaths: <span>{children.cumDeaths.toLocaleString()}</span></p>
                <p className="nationalStat">New infections: <span>{children.newCases.toLocaleString()}</span></p>
                <p className="nationalStat">New deaths: <span>{children.newDeaths.toLocaleString()}</span></p>
                <br></br><br></br>
                <button className="btn btn-secondary btn-block" type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default LaModal