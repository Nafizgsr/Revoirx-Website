import Navbar from '../Navbar/Navbar';
import './Home.css'
import Intro from './components/Intro/Intro';
import MediaSection from './components/MediaSection/MediaSection';
import Companies from './components/Trasted-Companies/Companies';
import Services from './components/Services/Services';
import Steps from './components/Steps/Steps';
import Questions from '../Questions/Questions';
import Status from './components/Status/Status';
import News from '../News/News';
import Subintro from '../Sub-Intro/Subintro';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
const Home = () => {
    return (<>
        <Navbar/>
        <Intro/>
        <MediaSection/>
        <Companies/>
        <Services/>
        <Steps
            isShowHowItsWork={true}
            heading="Unlocking Creativity in Simple Steps"
            isPadding1={true}
        />
        <Questions isHeader={true} heading={"Questions?"}/>
        <Status
            heading1="200+"
            description1="Successful Projects"
            heading2="4.8"
            description2="Client Satisfaction Rate"
            heading3="60+"
            description3="Industries Served Globally"
        />
        <News heading={'Explore world latest news'}/>
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

export default Home;