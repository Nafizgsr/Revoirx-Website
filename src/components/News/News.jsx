import './News.css';

const News = ({heading})=>{
    const newsList = [
        {id:1,name:'Global trends that inspire bold ideas',readTime:'5 Min Read',img:'/Images/newsImg2.png',isHighlight:true},
        {id:1,name:'What’s moving the world & the brands within it',readTime:'5 Min Read',img:'/Images/newsImg1.png',isHighlight:false},
        {id:1,name:'Insights & Innovation from across the globe',readTime:'5 Min Read',img:'/Images/mediaImg.png',isHighlight:false}
    ]
    return (<>
        <div className="news-container">
            <div className="row">
                <div className="col text-center">
                    <p className="news-h">{heading}</p>
                </div>
            </div>
            <div className="row news-grid-row">
                <div className="col news-grid-col">
                    {
                        newsList.map((item,index)=>(
                            <div key={index} className="news-card">
                                <div className="row">
                                    <div className="col">
                                        <div className="news-img">
                                            <img src={item.img}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row news-info-row">
                                    <div className="col news-info-col">
                                        <div className="branding-div">
                                            <p>Branding</p>
                                        </div>
                                        <div className="v-length-div">
                                            {item.readTime}
                                        </div>
                                    </div>
                                </div>

                                <div className="row name-row">
                                    <div className="col name-col">
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                <div className="row news-button-row">
                                    <div className="col news-button-col">
                                        <button className={`news-button ${item.isHighlight ? 'news-btn-is-highlight':''}`}>Read More <div className={`read-more-icon-circle ${item.isHighlight ? 'read-more-icon-circle-is-heighlight':''}`}><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19 8.99976L1 8.99976" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></div></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}

export default News;