import './Service.css';
import Navbar from '../Navbar/Navbar';
import Process from './components/Process/Process';
import Questions from '../Questions/Questions';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';

const Service = ()=>{
    return (<>
        <Navbar/>
        <div className="single-service-intro-container">
      <div className="row single-service-intro-name-row">
        <div className="col text-center" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="single-service-intro-name-div">
            <p>Service</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p className="single-service-intro-heading1">SEO<br/>Marketing</p>
        </div>
      </div>
      <div className="row single-service-intro-btn-row">
        <div className="col single-service-intro-btn-col">
          <button className="single-service-intro-btn">
            Get Started
            <div className="single-service-intro-icon">
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

      <div className="single-service-intro-img">
        <img src="/Images/Placeholder Image.png" />
      </div>
    </div>
    <Process/>
    <WhatWeDo/>
    <Questions isHeader={false} heading={"SEO<br/>Marketing FAQs"}/>
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

export default Service;