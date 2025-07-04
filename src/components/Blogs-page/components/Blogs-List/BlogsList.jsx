import './BlogsList.css';

const BlogCard = ({obj}) =>{
    console.log(obj)
    return (<>
        <div className={`blog-list-card ${obj.isHighlight ? 'blog-list-highlighted-card-column':''}`}>
            <div className="blog-list-card-image">
                <img src={obj.img} />
            </div>
            <div className="blog-list-card-info">
                <div className="blog-list-card-info-category">
                    <p>{obj.category}</p>
                </div>
                <p className="blog-list-card-info-read-time">{obj.readTime}</p>
            </div>
            <p className="blog-list-card-heading">{obj.heading}</p>
            <button className="blog-list-card-read-more-btn">Read more <div className="blog-list-card-read-more-icon">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 8.99976L1 8.99976" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </div>
                        </button> 
        </div>
    </>)
}

const BlogsList = ({list}) =>{
    return (<>
        <div className="blogs-list-container">
            {
                list.map((item,index)=>(
                    <BlogCard obj={item} key={index}/>
                ))
            }
        </div>
    </>)
}

export default BlogsList;