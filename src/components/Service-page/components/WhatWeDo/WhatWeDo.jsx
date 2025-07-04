import './WhatWeDo.css';

const WhatWeDoCard = ({obj}) =>{
    return (<>
        <div className="what-we-do-card">
            <p className="what-we-do-card-heading">{obj.name}</p>
            <p className="what-we-do-card-description">{obj.tool}</p>
        </div>
    </>);
}

const WhatWeDo = () =>{
    const service_details = [
        {id:1,name:'Project',tool:'Brooklyn Simmons'},
        {id:2,name:'Tools',tool:'Figma'},
        {id:3,name:'Service',tool:'Branding'},
        {id:4,name:'year',tool:'2025'}
    ];

    const whatWeDidList = [
        'Sit vulputate aliquam cras aliquam.Et,nibh congue consequat pellentesque.',
        'Vestibulum massa aliquet odio mauris duis amet . In sed dapibus porta est amet.',
        'Urna augue arcu duis eget proin sed morbi. Purus sit nunc sodales aliquam.',
        'Tortor tells commodo volutpat sed morbi. Mi justo,proin volutpat turpis a et.',
        'Ac ultrices sed odio fames dolor in eu. Augue tellus ac gravida nunc,ultrices lectus.',
        'Sit vestibulum nullam neque nullam. Turpis integer viverra ornare commodo pellentesque est.'
    ]

    return (<>
        <div className="what-we-do-container">
            <div className="what-we-do-left-div">
                <p className="what-we-do-text">Sit vulputate aliquam cras aliquam Et, nibh congue consequat pellentesque Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices ultricies viverra Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non Morbi id massa interdum nam tellus Magna nunc interdum tellus neque auctor sagittis.</p>
                <div className="what-we-do-img">
                    <img src="/Images/image.png" alt="what-we-do-img" />
                </div>
                <p className="what-we-do-text">
                    Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.
                </p>
                <p className="what-we-do-heading">What we did</p>
                <ul className="what-we-did-ul">
                    {
                        whatWeDidList.map((item,index)=>(
                            <li className="what-we-did-li" key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="what-we-do-right-div">
                <p className="what-we-do-text">A platform for people to exchange skills and services locally.</p>
                <div className="what-we-do-grid">
                    {
                        service_details.map((item,index)=>(
                            <WhatWeDoCard obj={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}

export default WhatWeDo;