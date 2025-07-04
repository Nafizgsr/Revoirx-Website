import './CaseStudies.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Status from '../Home-page/components/Status/Status';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Card = ({list}) => {
    return (<>
        {
            list.map((item,index)=>(
                <div className="case-studies-card-container" key={index}>
                    <div className={`case-studies-info-card ${index%2 !== 0 ? 'case-studies-info-card-revarsed':''}`}>
                        <div className="case-studies-card-info-img">
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="case-studies-card-info-des">
                            <p className="case-studies-card-info-des-header">
                                {item.heading}
                            </p>
                            <p className="case-studies-card-info-des-des">
                                {item.description}
                            </p>
                            <button className="case-studies-card-button">
                                Case Study
                                <div className="case-studies-card-button-img">
                                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M19 8.99976L1 8.99976" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
    </>)
}

const CaseStudies = () =>{
    const cardList = [
        {id:1,image:'/Images/Placeholder Image.png',heading:'AI Trainning',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis "},
        {id:1,image:'/Images/Placeholder Image.png',heading:'AI Trainning',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis "},
        {id:1,image:'/Images/Placeholder Image.png',heading:'AI Trainning',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis "}
    ]
    return (<>
        <Navbar/>
        <div className="case-studies-intro-container">
            <Subintro 
            heading="Supercharge your Artistic methods"
            description="Get revolutionary AI-led technology to create breathtaking photos and mind-blowing art. No limit to your imagination."
            buttonText="Get Started"
            IsHead = {false}
            IsButton = {false}
            subHeadName = 'Case Studies'
            onClick={() => console.log('Button clicked')}
        />
        </div>

        <div className="case-studies-image-container">
            <div className="case-studies-image-sub-container">
                <div className="case-studies-image-div-1">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
                <div className="case-studies-image-div-1">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
            </div>
            <div className="case-studies-image-sub-container">
                <div className="case-studies-image-div-2">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
                <div className="case-studies-image-div-2">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
            </div>
            <div className="case-studies-image-sub-container">
                <div className="case-studies-image-div-0">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
            </div>
            <div className="case-studies-image-sub-container">
                <div className="case-studies-image-div-2">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
                <div className="case-studies-image-div-2">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
            </div>
            <div className="case-studies-image-sub-container">
                <div className="case-studies-image-div-1">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
                <div className="case-studies-image-div-1">
                    <img src="/Images/mediaImg.png" alt="img" />
                </div>
            </div>
        </div>
        <Status
            heading1="150+"
            description1="Interfaces designed since 2016"
            heading2="100%"
            description2="Of the team are pixel-perfect geeks"
            heading3="68%"
            description3="Of clients returned with a new project"
        />

        <Card list={cardList}/>
        <Testimonial/>
        <Subintro 
            heading="Inspired?"
            description="Create something from nothing, just describe what's on your mind"
            buttonText="Get Started"
            IsHead = {true}
            IsButton = {true}
            onClick={() => console.log('Button clicked')}
        />
        <Footer/>
    </>)
}


export default CaseStudies;