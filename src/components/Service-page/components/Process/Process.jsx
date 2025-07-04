import './Process.css';
import {stepsList, formatNumber} from '../../../Home-page/components/Steps/Steps'

const ProcessCard = ({item})=>{
    return (
        <>
            <div className="process-card">
                <div className="row">
                    <div className="col process-index-col">
                        {/* <div className="process-index-container">
                            <p>Step {formatNumber(item.id)}</p>
                        </div> */}
                        <div className="process-index-container">
                            <p>Step {formatNumber(item.id)}</p>
                        </div>
                    </div>
                </div>
                <div className="row card-process-h-row">
                    <div className="col text-center">
                        <p className='card-process-h' dangerouslySetInnerHTML={{ __html: item.name }}></p>
                    </div>
                </div>
                <div className="row card-process-d-row">
                    <div className="col text-center">
                        <p className='card-process-d'>{item.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Process = ()=>{
    return (
        <>
            <div className="process-container">
                <p className="process-header">Simple process</p>
                <div className="process-grid">
                    {
                        stepsList.map((item,index)=>(
                            <ProcessCard key={index} item={item} />
                        ))
                    }
                </div>
                </div> 
        </>
    )
}

export default Process;