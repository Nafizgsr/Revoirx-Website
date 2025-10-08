import './TermsService.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';
import { useState } from 'react';


const TermsService = () =>{
    const termsServiceList = [
        {id:1,heading:"Terms & Conditions",subHeading:'AI Generator UI Update 1',subList:[
            {id:1,heading:'',description:'Welcome to RevoirX. By accessing or using our website and services, you agree to comply with the following Terms and Conditions. Please read this page carefully, as it outlines the legal rights, obligations, and responsibilities between you and us.'},
            {id:2,heading:'',description:'Our company is a UK-registered IT agency providing global services in website development, digital marketing, branding, AI automation, and IT consulting. These Terms govern your use of our website, products, and services worldwide.'},
            {id:3,heading:'1. Acceptance of Terms:',description:'By accessing our website or engaging in any of our services, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, please refrain from using our services'},
            {id:4,heading:'2. Services Provided',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:5,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:6,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:7,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:8,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:9,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:10,heading:'10. Governing Law:',description:'These Terms & Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the UK courts.'},
            {id:10,heading:'11. Changes to Terms:',description:'We reserve the right to update or modify these Terms at any time. Updated terms will be posted on this page, and continued use of our services constitutes acceptance of any changes.'}
        ]},
        {id:2,heading:"Privacy statement",subHeading:'AI Generator UI Update 2',subList:[
            {id:1,heading:'',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:2,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:3,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:4,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:5,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:6,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:7,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:8,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:9,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:10,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'}
        ]},
        {id:3,heading:"Cookie policy",subHeading:'AI Generator UI Update 3',subList:[
            {id:1,heading:'',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:2,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:3,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:4,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:5,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:6,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:7,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:8,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:9,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:10,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'}
        ]},
        {id:4,heading:"Security",subHeading:'AI Generator UI Update 4',subList:[
            {id:1,heading:'',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:2,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:3,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:4,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:5,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:6,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:7,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:8,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:9,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'},
            {id:10,heading:'Upcoming Charges:',description:'Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.'}
        ]}
    ]
    const [termsIndex, setTermsIndex] = useState(0);
    return (<>
        <Navbar/>
        <div className="terms-service-subintro-container">
            <Subintro 
            heading={termsServiceList[termsIndex].heading}
            isNoDes={true}
            description="We create a world with more founders and do work that will have an impact on the world today, tomorrow, and beyond"
            buttonText="Legal"
            IsHead = {false}
            IsButton = {false}
            IsSecondButton = {false}
            secontBtnText = "Apply now"
            IsInput={false}
            subHeadName = 'Legal'
            onClick={() => console.log('Button clicked')}
        />
        </div>
        <div className="terms-service-container">
            <div className="terms-service-sub-container">
                <div className="terms-service-heading-div">
                    {
                        termsServiceList.map((item,index)=>(
                            <a key={index} className={`terms-service-heading ${index == termsIndex ? 'terms-service-heading-active':''}`} onClick={() => setTermsIndex(index)}>{item.heading}</a>
                        ))
                    }
                </div>
                <div className="terms-service-des-div">
                    <p className="terms-service-des-heading">{termsServiceList[termsIndex].subHeading}</p>
                        {
                            termsServiceList[termsIndex].subList.map((item,index)=>(
                                <div className="terms-service-des-info" key={index}>
                                    {
                                        item.heading &&
                                        <p className="terms-service-des-info-heading">{item.heading}</p>
                                    }
                                    <p className="terms-service-des-info-heading">{item.description}</p>
                                </div>
                            ))
                        }
                    
                </div>
            </div>
        </div>
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

export default TermsService;