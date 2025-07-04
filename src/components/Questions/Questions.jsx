import './Questions.css';
import { useState } from 'react';

const Card = ({ title, content, isExpanded, onClick }) => {
  return (
    <>
        <div className={`card ${isExpanded ? 'isExpanded':'not-expanded'}`}>
            <div className="">
                <div className="card-header-col">
                    <p>{title}</p>
                    <button onClick={onClick} className='dropdown-button'>
                        <svg className={isExpanded ? 'rotate' : ''} width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.88379 9.53027C1.79832 9.6157 1.66636 9.62664 1.56934 9.5625L1.53027 9.53027L1.17676 9.17676C1.09133 9.09133 1.08048 8.95933 1.14453 8.8623L1.17676 8.82324L8.82324 1.17676C8.90868 1.09132 9.04066 1.08043 9.1377 1.14453L9.17676 1.17676L16.8232 8.82324C16.9087 8.9087 16.9196 9.04066 16.8555 9.1377L16.8232 9.17676L16.4697 9.53027C16.3843 9.61569 16.2523 9.62657 16.1553 9.5625L16.1162 9.53027L9 2.41406L1.88379 9.53027Z" fill="#ECECEC" stroke="#ECECEC"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`row card-content-row ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="col card-content-col">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </>
  );
};

const Questions = ({isHeader,heading , description})=>{
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleCard = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };
    const questionsList = [
        {id:1,name:'Question text goes here',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'},
        {id:2,name:'Question text goes here',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'},
        {id:3,name:'Question text goes here',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'},
        {id:4,name:'Question text goes here',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'},
        {id:5,name:'Question text goes here',answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'}
    ]
    return (<>
        <div className="questions-main-container">
            {
                isHeader && 
                <div className="row">
                    <div className="col text-center">
                        <p className="questions-h">FAQs</p>
                    </div>
            </div>
            }
            <div className="questions-intro-row">
                <div className="text-center">
                    <p className="questions-intro" dangerouslySetInnerHTML={{ __html: heading }}></p>
                    {
                        description &&
                        <p className="questions-des">{description}</p>
                    }
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="card-center">
                        {questionsList.map((item,index)=>(
                            <Card key={index} title={item.name} content={item.answer} isExpanded={expandedIndex === index} onClick={() => toggleCard(index)}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Questions;