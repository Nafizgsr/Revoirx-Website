import './Status.css';

const Status = ({heading1,description1,heading2,description2,heading3,description3})=>{
    return (<>
        <div className="status-container">
            <div className="status-card">
                <div className="">
                    <div className="text-center">
                        <p className='status-card-h'>{heading1}</p>
                    </div>
                </div>
                <div className="status-card-p-row">
                    <div className="text-center">
                        <p className='status-card-p'>{description1}</p>
                    </div>
                </div>
            </div>
            <div className="status-card">
                <div className="">
                    <div className="text-center">
                        <p className='status-card-h'>{heading2}</p>
                    </div>
                </div>
                <div className="status-card-p-row">
                    <div className="text-center">
                        <p className='status-card-p'>{description2}</p>
                    </div>
                </div>
            </div>
            <div className="status-card">
                <div className="">
                    <div className="text-center">
                        <p className='status-card-h'>{heading3}</p>
                    </div>
                </div>
                <div className="status-card-p-row">
                    <div className="text-center">
                        <p className='status-card-p'>{description3}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Status;