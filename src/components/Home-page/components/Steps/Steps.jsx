/* eslint-disable react-refresh/only-export-components */
import './Steps.css';


    export const formatNumber = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    };
    export const stepsList = [
        {id:1,name:'Make An<br/>Appointment',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'},
        {id:2,name:'Schedule<br/>Your Consultation',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'},
        {id:3,name:'Taken Care<br/>of Successfully',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'}
    ]
const Steps = () =>{
    return (<>
        <div className="steps-container padding-1">
            <div className="">
                <div className="row">
                    <div className="col text-center">
                        <p className="steps-s-h">How It Work's</p>
                    </div>
                </div>
                <div className="row steps-h-row">
                    <div className="col text-center">
                        <p className="steps-h">Unlocking Creativity in Simple Steps</p>
                    </div>
                </div>
                <div className="row steps-section">
                    <div className="col">
                        <div className="steps-grid">
                            {
                                stepsList.map((item,index)=>(
                                    <div key={index} className="steps-card">
                                        <div className="row">
                                            <div className="col steps-index-col">
                                                <div className="steps-index-container">
                                                    <p>Step {formatNumber(item.id)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row card-steps-h-row">
                                            <div className="col text-center">
                                                <p className='card-steps-h' dangerouslySetInnerHTML={{ __html: item.name }}></p>
                                            </div>
                                        </div>
                                        <div className="row card-steps-d-row">
                                            <div className="col text-center">
                                                <p className='card-steps-d'>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Steps;