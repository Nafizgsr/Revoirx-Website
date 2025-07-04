import './Error404Page.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Error404Page = () =>{
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };
    return (<>
        <Navbar/>
        <div className="error-404-container">
            <Subintro 
                heading="404"
                description="It seems you got a little bit"
                buttonText="Go back to home"
                IsHead = {true}
                IsButton={true}
                onClick={() => goHome()}
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

export default Error404Page;