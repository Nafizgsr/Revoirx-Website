import './Services.css';

const Services = ()=>{
    const formatNumber = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    };
    const services = [
        {
            id:1,name:'SEO<br/>Marketing',description:'Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.'
        },
        {
            id:2,name:'SEO<br/>Marketing',description:'Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.'
        },
        {
            id:3,name:'SEO<br/>Marketing',description:'Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.'
        },
        {
            id:4,name:'SEO<br/>Marketing',description:'Use plugins to edit objects, create unions by hand, and manage blur, opacity, and fill settings. Collaborate with the community, prototype using the pen tool, and rotate or arrange elements with boolean operations. Share stars, devices, and editor content seamlessly.'
        }
    ]
    return (<>
        <div className="main-services-container">
            <div className="container-xl services-container">
            <div className="row">
                <div className="col text-center">
                    <p className='service-h'>Services</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p className='service-intro'>Tailored digital solutions for sour success</p>
                </div>
            </div>
            <div className="row see-all-services-row">
                <div className="col see-all-services-col">
                    <button className='see-all-services-btn'>See All Services <div className="see-all-services-icon">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 8.99976L1 8.99976" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div></button>    
                </div>
            </div>
        </div>
        <div className="services-list-container">
            <ul>
                {services.map((item,index)=>(
                    <li key={index}>
                        <div className="container-xl service-list-item">
                            <div className="service-index-container">
                                <p className='service-index'>{formatNumber(item.id)}</p>
                            </div>
                            <p className='service-heading' dangerouslySetInnerHTML={{ __html: item.name }}></p>
                            <p className='service-description'>{item.description}</p>
                            <button className="service-list-button">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.9968 0.00341797V30.0034H33.9968V3.41748L1.41772 35.9966L0.00366211 34.5815L32.5818 2.00342H5.99683V0.00341797H35.9968Z"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    </>)
}

export default Services;