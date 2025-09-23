import './MediaSection.css'

const MediaSection = () =>{
    const mediaImages = [
        {id:1, img:'Images/mediaImg1.png'},
        {id:2, img:'Images/mediaImg2.png'},
        {id:3, img:'Images/mediaImg3.png'},
        {id:4, img:'Images/mediaImg4.png'},
        {id:5, img:'Images/mediaImg5.png'}
    ]
    return (
        <>
            <div className="container-xl media-section-container">
                <div className="media-grid">
                    {mediaImages.map((item, index) => (
                    <div key={index} className={`mediaImage img-${index + 1}`}>
                        <img src={item.img} alt="media" />
                    </div>
                    ))}
                </div>
            </div>
            <div className="media-video-container">
                    <video src="videos/video1.mp4" autoPlay muted loop playsInline>
                        Your browser does not support the video tag.
                    </video>
            </div>
        </>
    );

}

export default MediaSection;