import './Blogs.css';
import Navbar from '../Navbar/Navbar';
import BlogsList from './components/Blogs-List/BlogsList';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';

const Blogs = () =>{
    const blogsList = [
        {id:1,category:'Branding',readTime:'5 min read',heading:'Global trends that inspire bold ideas',img:'/Images/newsImg2.png',isHighlight:true},
        {id:2,category:'Branding',readTime:'5 min read',heading:"Whats's moving the world & the brands within it",img:'/Images/newsImg1.png',isHighlight:false},
        {id:3,category:'Branding',readTime:'5 min read',heading:'Insights & Innovation from across the globe',img:'/Images/mediaImg.png',isHighlight:false},
        {id:4,category:'Branding',readTime:'5 min read',heading:'Global trends that inspire bold ideas',img:'/Images/newsImg2.png',isHighlight:false},
        {id:5,category:'Branding',readTime:'5 min read',heading:"Whats's moving the world & the brands within it",img:'/Images/newsImg1.png',isHighlight:false},
        {id:6,category:'Branding',readTime:'5 min read',heading:'Insights & Innovation from across the globe',img:'/Images/mediaImg.png',isHighlight:false},
        {id:7,category:'Branding',readTime:'5 min read',heading:'Global trends that inspire bold ideas',img:'/Images/newsImg2.png',isHighlight:false},
        {id:8,category:'Branding',readTime:'5 min read',heading:"Whats's moving the world & the brands within it",img:'/Images/newsImg1.png',isHighlight:false},
        {id:9,category:'Branding',readTime:'5 min read',heading:'Insights & Innovation from across the globe',img:'/Images/mediaImg.png',isHighlight:false},
        {id:10,category:'Branding',readTime:'5 min read',heading:'Global trends that inspire bold ideas',img:'/Images/newsImg2.png',isHighlight:false},
        {id:11,category:'Branding',readTime:'5 min read',heading:"Whats's moving the world & the brands within it",img:'/Images/newsImg1.png',isHighlight:false},
        {id:12,category:'Branding',readTime:'5 min read',heading:'Insights & Innovation from across the globe',img:'/Images/mediaImg.png',isHighlight:false},
        {id:13,category:'Branding',readTime:'5 min read',heading:'Global trends that inspire bold ideas',img:'/Images/newsImg2.png',isHighlight:false},
        {id:14,category:'Branding',readTime:'5 min read',heading:"Whats's moving the world & the brands within it",img:'/Images/newsImg1.png',isHighlight:false},
        {id:15,category:'Branding',readTime:'5 min read',heading:'Insights & Innovation from across the globe',img:'/Images/mediaImg.png',isHighlight:false}
    ]
    return (<>
        <Navbar/>
        <div className="blogs-intro-container">
            <div className="blogs-center">
                <div className="blogs-intro-name-div">
                    <p>Blogs</p>
                </div>
            </div>
            <div className="blogs-center">
                <p className="blogs-intro-heading">All blogs</p>
            </div>
            <div className="blogs-center">
                <p className="blogs-intro-description">Create something from nothing, just describe what's on your mind</p>
            </div>
            <div className="blogs-center">
                <div className="blogs-type-list-container">
                    <ul className="blogs-type-list">
                        <li><a className='blogs-type-active'>Most Recent</a></li>
                        <li><a>Product</a></li>
                        <li><a>About</a></li>
                        <li><a>Inspiration</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <BlogsList list={blogsList}/>
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

export default Blogs;