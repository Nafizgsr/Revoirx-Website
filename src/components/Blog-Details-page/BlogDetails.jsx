import './BlogDetails.css';
import Navbar from '../Navbar/Navbar';
import News from '../News/News';
import BlogDetailsContent from './components/Blog-Details-Content/BlogDetailsContent';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';

const BlogDetails = () => {
    return (<>
        <Navbar/>
        <div className="blog-details-intro-container">
            <div className="blog-details-sub-intro-container">
                <div className="blog-details-sub-intro-name-div">
                    <p>Branding</p>
                </div>
                <p className="blog-details-sub-intro-heading">Modern and impending Photo techniques</p>
                <p className="blog-details-sub-intro-inspiration"><span style={{marginRight:'10px'}}>•</span>Inspiration{"   "}Jun 3, 2024</p>
            </div>
            <div className="blog-details-intro-img">
                <img src="/Images/Placeholder Image.png" alt="img" />
            </div>
        </div>
        <BlogDetailsContent/>
        <News heading={'Related insights'}/>
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

export default BlogDetails;