import './Career.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';
import Status from '../Home-page/components/Status/Status';
import Questions from '../Questions/Questions';

const MissionValues = ({list,isValues}) => {
    return (<>
            {
                list.map((item,index)=>(
                    <div className="mission-values-container" key={index}>
                        <div className={`mission-values-sub-container ${isValues ? 'career-is-values':''}`}>
                            <div className="mission-values-header-div">
                                <p className="mission-values-header">{item.heading}</p>
                            </div>
                            <div className="mission-values-des-div">
                                {
                                    item.missionSub.map((item,index)=>(
                                        <div className="mission-values-des-sub-div" key={index}>
                                            {
                                                item.heading &&
                                                <p className="mission-values-des-heading">{item.heading}</p>
                                            }
                                            <p className="mission-values-des-description">{item.desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </>)
}

const Vission = ({list}) =>{
    return (<>
    {
        list.map((item,index)=>(
            <div className="vission-container" key={index}>
                <div className={`vission-card ${index%2 !== 0 ? 'vission-card-reversed':''}`}>
                    <div className="vission-info-div">
                        <p className="vission-info-heading">{item.heading}</p>
                        <p className="vission-info-des">{item.des}</p>
                    </div>
                    <div className="vission-img-div">
                        <img src={item.img} alt="img" />
                    </div>
                </div>
            
            </div>
                    
        ))
    }
        
    </>)
}

const Positions = ({list}) =>{
    return (<>
        <div className="career-position-container">
            <p className="career-position-header">Open positions</p>
            <div className="career-position-sub-container">
                {
                    list.map((item,index)=>(
                        <div className="career-position-card" key={index}>
                            <div className="career-position-type-div">
                                <p className="career-position">{item.position}</p>
                                <p className="career-position-category">{item.category}</p>
                            </div>
                            <p className="career-position-category">{item.location}</p>
                        </div>
                    ))
                }
            </div>
            <div className="caree-no-position-container">
                <p className="career-no-position-heading">
                    Can't find the right position?
                </p>
                <p className="career-no-position-des">
                    We are always looking for top talent, so feel free to get in touch anytime
                </p>
                <button className="career-btn">
            Apply Now
            <div className="career-icon">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 8.99976L1 8.99976"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
            </div>
        </div>
    </>)
}

const Career = () =>{
    const mission = [{
        id:1,heading:'Our mission',missionSub:[
            {id:1,heading:'',desc:'We are building a world-class team. We’re looking for outliers: crazy thinkers with entrepreneurial tendencies. People who aren’t afraid to question the norms of society. Most importantly, we’re looking for optimists who can ship fast while maintaining a high bar for quality.'},
            {id:2,heading:'',desc:'We are building a world-class team. We’re looking for outliers: crazy thinkers with entrepreneurial tendencies. People who aren’t afraid to question the norms of society. Most importantly, we’re looking for optimists who can ship fast while maintaining a high bar for quality.'}
        ]
    }]
    const values = [{
        id:1,heading:'Shared values',missionSub:[
            {id:1,heading:'Build great products',desc:'We take pride in our craftsmanship and appreciate the beauty of software. We don’t do slipshod work. We care about the tiniest of details. We distinguish the great from the good. We are here to do the best work of our lives, and we hope you are too.'},
            {id:1,heading:'Get shit done',desc:'We take pride in our craftsmanship and appreciate the beauty of software. We don’t do slipshod work. We care about the tiniest of details. We distinguish the great from the good. We are here to do the best work of our lives, and we hope you are too.'},
            {id:1,heading:'Customer obsessed',desc:'We take pride in our craftsmanship and appreciate the beauty of software. We don’t do slipshod work. We care about the tiniest of details. We distinguish the great from the good. We are here to do the best work of our lives, and we hope you are too.'},
            {id:1,heading:'Get shit done',desc:'We take pride in our craftsmanship and appreciate the beauty of software. We don’t do slipshod work. We care about the tiniest of details. We distinguish the great from the good. We are here to do the best work of our lives, and we hope you are too.'}
        ]
    }]
    const vission = [
        {id:1,heading:'Small teams, global mission',img:'/Images/Placeholder Image 3.png',des:"Today, we're growing fast and excited for new teammates to join us who are the best at what they do. We're still a small team, and every new team member has the opportunity to help shape our product & organization, playing a massive role in driving our mission forward."},
        {id:2,heading:'A career as original as you are',img:'/Images/Placeholder Image 4.png',des:"Don’t just climb the ladder; jump around and swing across it. At SPICE, careers are flexible, and we aim to support your unique path. Whether you're a passionate people leader, creative wiz or a specialist who wants to stay close to their craft, we’ll help you grow."}
    ]
    const positions = [
        {id:1,position:'Account Associate',category:'Sales',location:'Hybrid / San Francisco, CA'},
        {id:2,position:'Account Associate',category:'Sales',location:'Hybrid / San Francisco, CA'},
        {id:3,position:'Account Associate',category:'Sales',location:'Hybrid / San Francisco, CA'},
        {id:4,position:'Account Associate',category:'Sales',location:'Hybrid / San Francisco, CA'},
        {id:5,position:'Account Associate',category:'Sales',location:'Hybrid / San Francisco, CA'},
    ]
    return (<>
        <Navbar/>
        <div className="career-intro-container">
            <Subintro 
            heading="Join the AI-led revolution"
            description="We create a world with more founders and do work that will have an impact on the world today, tomorrow, and beyond"
            buttonText="Get Started"
            IsHead = {false}
            IsButton = {true}
            IsSecondButton = {true}
            secontBtnText = "Apply now"
            IsInput={false}
            subHeadName = 'Career'
            onClick={() => console.log('Button clicked')}
        />
        </div>
        <div className="career-image-container">
            <div className="career-image-sub-container">
                <div className="career-image-div-1">
                    <img src="/Images/Placeholder Image 1.png" alt="img" />
                </div>
                <div className="career-image-div-1">
                    <img src="/Images/Placeholder Image 2.png" alt="img" />
                </div>
            </div>
            <div className="career-image-sub-container">
                <div className="career-image-div-2">
                    <img src="/Images/Placeholder Image 3.png" alt="img" />
                </div>
                <div className="career-image-div-2">
                    <img src="/Images/Placeholder Image 4.png" alt="img" />
                </div>
                <div className="career-image-div-1">
                    <img src="/Images/Placeholder Image 5.png" alt="img" />
                </div>
            </div>
            <div className="career-image-sub-container">
                <div className="career-image-div-1">
                    <img src="/Images/Placeholder Image 6.png" alt="img" />
                </div>
                <div className="career-image-div-1">
                    <img src="/Images/Placeholder Image 7.png" alt="img" />
                </div>
            </div>
        </div>
        <MissionValues list={mission}/>
        <Status
            heading1="13"
            description1="Current employees"
            heading2="97%"
            description2="Employees with over 2 years of service"
            heading3="$1.6M"
            description3="company’s market cap"
        />
        <MissionValues list={values} isValues={true}/>
        <Vission list={vission}/> 
        <Positions list={positions}/>
        <Questions isHeader={false} heading={"How we hire"} description={"Learn about our interview process and anything else you have in mind"}/>
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

export default Career;