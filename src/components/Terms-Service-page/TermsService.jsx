import './TermsService.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';


const TermsService = () =>{
    return (<>
        <Navbar/>
        <div className="terms-service-subintro-container">
            <Subintro 
            heading="Terms of service"
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