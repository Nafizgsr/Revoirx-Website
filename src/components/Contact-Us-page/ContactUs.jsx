import Navbar from '../Navbar/Navbar';
import Card from './Components/Contact-Us-form-card/Card';
import ContactUsAddress from './Components/Contact-us-address/ContactUsAddress';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';
import './ContactUs.css';


const ContactUs = () =>{
    return (<>
        <Navbar/>
        <div className="contact-us-intro-container">
            <div className="item-center">
                <div className="contact-us-intro-name-div text-center">
                    <p>Contact</p>
                </div>
            </div>
            <div className="item-center">
                <p className="contact-us-intro-heading">G’day, everyone<br/>everywhere </p>
            </div>
            <div className="item-center">
                <p className="contact-us-intro-description">Any questions from real people to real people</p>
            </div>
        </div>
        <Card/>
        <ContactUsAddress/>
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


export default ContactUs;