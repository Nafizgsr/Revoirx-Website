import './AboutUs.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Companies from '../Home-page/components/Trasted-Companies/Companies';
import Reason from './components/Reason/Reason';
import Founders from './components/Founders/Founders';
import Status from '../Home-page/components/Status/Status';
import Footer from '../Footer/Footer'

const VideoContainer = () =>{
    return (<>
        <div className="about-us-video-col">
                <div className="about-us-video-container">
                    <video src="videos/video1.mp4" autoPlay muted loop playsInline>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
    </>)
}

const CompanyInfo = () =>{
    return (<>
        <div className="about-us-company-info-col">
                <div className="about-us-company-info-container">
                    <p className="about-us-company-info-heading">
                        Company
                    </p>
                    <p className="about-us-company-info-description">
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    </p>
                    <p className="about-us-company-info-description">
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    </p>
                </div>
            </div>
    </>)
}

const CompanyComments = () =>{
    return (<>
        <div className="company-comments-container">
            <div className="company-comments-inner-container">
                <div className="company-comments-card">
                    <div className="company-comments-rating">
                        {
                        [...Array(5)].map((_,index)=>(
                            <div className="star-container" key={index}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.07063 0.612343C9.41438 -0.204115 10.5851 -0.204114 10.9289 0.612346L12.9576 5.43123C13.1026 5.77543 13.4303 6.01061 13.8064 6.0404L19.0724 6.45748C19.9646 6.52814 20.3264 7.62813 19.6466 8.2034L15.6345 11.5987C15.348 11.8412 15.2228 12.2218 15.3103 12.5843L16.5361 17.661C16.7438 18.5211 15.7966 19.201 15.0328 18.7401L10.5243 16.0196C10.2023 15.8252 9.79726 15.8252 9.47523 16.0196L4.96674 18.7401C4.20287 19.201 3.25571 18.5211 3.46339 17.661L4.68918 12.5843C4.77673 12.2218 4.65158 11.8412 4.36501 11.5987L0.352818 8.2034C-0.326962 7.62813 0.0348237 6.52814 0.927047 6.45748L6.19311 6.0404C6.56926 6.01061 6.89691 5.77543 7.04182 5.43123L9.07063 0.612343Z" fill="#E9C224"/>
                                </svg>
                            </div>
                        ))
                    }
                    </div>
                    <p className="company-comments-description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                    </p>
                    <div className="company-comments-company-details">
                        <div className="company-avater-img">
                            <img src="/Images/Avatar Image.png" alt="company avatar" />
                        </div>
                        <div className="company-comments-company-sub-details">
                            <p className="company-comments-company-name">Name Surname</p>
                            <p className="company-comments-company-position">Position,Company Name</p>
                        </div>
                        <div className="company-comments-company-details-icon">
                            <svg width="133" height="37" viewBox="0 0 133 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.5517 9.23552L31.8029 9.68396C32.1191 10.2289 32.2861 10.8476 32.2872 11.4776V25.3791C32.282 26.0086 32.1152 26.6262 31.8029 27.1728L31.5338 27.6213C31.2266 28.1703 30.7733 28.6234 30.2245 28.9307L18.1884 35.8903C17.6434 36.2065 17.0248 36.3735 16.3947 36.3747H15.8925C15.2615 36.3806 14.641 36.213 14.0987 35.8903L2.04486 28.9487C1.50761 28.6261 1.05792 28.1765 0.735434 27.6392L0.48431 27.1908C0.168157 26.6457 0.00111999 26.0271 0 25.397V11.4955C0.00111999 10.8656 0.168157 10.2468 0.48431 9.70189L0.735434 9.25346C1.04979 8.70991 1.50131 8.25832 2.04486 7.94403L14.0808 0.98431C14.6258 0.668174 15.2444 0.501137 15.8745 0.5H16.3947C17.0248 0.501137 17.6434 0.668174 18.1884 0.98431L30.2245 7.92609C30.7711 8.24249 31.2279 8.6932 31.5517 9.23552ZM16.3947 4.08739H15.8745L5.38122 10.1502L16.1436 16.3565L26.906 10.1502L16.3947 4.08739ZM28.4306 25.8276L17.9373 31.8905V19.4778L28.6997 13.2536V25.3792L28.4306 25.8276ZM79.0633 27.0475H75.3438V7.41687H79.0633V27.0475ZM45.5 27.4683H49.6586V20.3392H51.4667L55.8836 27.4683H60.3263L55.4445 19.6161C57.6142 18.9703 59.2415 17.498 59.2415 14.7084V14.605C59.2415 10.7823 56.4777 9 52.1124 9H45.5V27.4683ZM49.6586 17.498V12.2029H52.0091C54.0239 12.2029 55.1604 12.8487 55.1604 14.7342V14.8375C55.1604 16.6198 54.1014 17.498 52.0091 17.498H49.6586ZM67.0806 27.3309C70.7742 27.3309 73.0989 25.7037 73.538 22.7849H69.9993C69.7668 23.9214 68.9145 24.6705 67.1839 24.6705C65.1433 24.6705 63.9294 23.379 63.826 21.1318H73.5639V20.0986C73.5639 15.2684 70.4643 13.2279 66.9772 13.2279C63.0511 13.2279 60.029 15.9917 60.029 20.2536V20.4602C60.029 24.7738 62.9994 27.3309 67.0806 27.3309ZM63.8777 18.833C64.1618 16.9215 65.2983 15.8109 66.9772 15.8109C68.7595 15.8109 69.7927 16.7924 69.9219 18.833H63.8777ZM86.1985 27.332C88.4201 27.332 89.7886 26.2988 90.486 24.9299V27.0479H94.2056V13.5389H90.486V21.4687C90.486 23.4576 89.2461 24.4391 87.6711 24.4391C86.0698 24.4391 85.32 23.5609 85.32 21.727V13.5389H81.6009V22.2436C81.6009 25.7822 83.5639 27.332 86.1985 27.332ZM100.491 27.0468H96.7448V13.5378H100.491V15.6042C101.162 14.3385 102.608 13.2279 104.623 13.2279C106.406 13.2279 107.749 13.977 108.395 15.5784C109.479 13.9511 111.236 13.2279 112.94 13.2279C115.446 13.2279 117.383 14.8035 117.383 18.3939V27.0468H113.664V18.8071C113.664 17.0765 112.888 16.3016 111.545 16.3016C110.099 16.3016 108.937 17.2315 108.937 19.0654V27.0468H105.217V18.8071C105.217 17.0765 104.417 16.3016 103.099 16.3016C101.653 16.3016 100.491 17.2315 100.491 19.0654V27.0468ZM126.031 27.3309C129.726 27.3309 132.051 25.7037 132.489 22.7849H128.95C128.718 23.9214 127.865 24.6705 126.135 24.6705C124.094 24.6705 122.881 23.379 122.777 21.1318H132.515V20.0986C132.515 15.2684 129.415 13.2279 125.928 13.2279C122.002 13.2279 118.98 15.9917 118.98 20.2536V20.4602C118.98 24.7738 121.95 27.3309 126.031 27.3309ZM122.829 18.833C123.113 16.9215 124.25 15.8109 125.928 15.8109C127.711 15.8109 128.744 16.7924 128.873 18.833H122.829Z" fill="#ECECEC"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const AboutUs = () => {
    return (<>
        <Navbar/>
        <div className="about-us-sub-intro-container">
            <Subintro
            heading="For the future of AI and beyond"
            description="People who think differently, who challenge norms, who give free rein to feelings, fantasies, ideas and experiences to inspire everyone"
            buttonText="Get Started"
            subHeadName='Company'
            IsHead={false}
            onClick={() => console.log('Button clicked')}
        />
        </div>
        <VideoContainer/>
        <CompanyInfo/>
        <Reason/>
        <Founders/>
        <Status/>
        <CompanyComments/>
        <Companies/>
        <Subintro 
            heading="Inspired?"
            description="Create something from nothing, just describe what's on your mind"
            buttonText="Get Started"
            IsHead = {true}
            IsButton = {true}
            onClick={() => console.log('Button clicked')}
        />
        <Footer/>
    </>);
}

export default AboutUs;