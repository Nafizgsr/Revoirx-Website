import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Testimonial.css';

const TestimonialCard = ({obj})=>{
    return (<>
        <div className="testimonial-card">
            <div className="row">
                <div className="col star-col">
                    {
                        [...Array(obj.rating)].map((_,index)=>(
                            <div className="star-container" key={index}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.07063 0.612343C9.41438 -0.204115 10.5851 -0.204114 10.9289 0.612346L12.9576 5.43123C13.1026 5.77543 13.4303 6.01061 13.8064 6.0404L19.0724 6.45748C19.9646 6.52814 20.3264 7.62813 19.6466 8.2034L15.6345 11.5987C15.348 11.8412 15.2228 12.2218 15.3103 12.5843L16.5361 17.661C16.7438 18.5211 15.7966 19.201 15.0328 18.7401L10.5243 16.0196C10.2023 15.8252 9.79726 15.8252 9.47523 16.0196L4.96674 18.7401C4.20287 19.201 3.25571 18.5211 3.46339 17.661L4.68918 12.5843C4.77673 12.2218 4.65158 11.8412 4.36501 11.5987L0.352818 8.2034C-0.326962 7.62813 0.0348237 6.52814 0.927047 6.45748L6.19311 6.0404C6.56926 6.01061 6.89691 5.77543 7.04182 5.43123L9.07063 0.612343Z" fill="#E9C224"/>
                                </svg>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="row testimonial-card-description-row">
                <div className="col">
                    <p className="testimonial-card-description">
                        {obj.comment}
                    </p>
                </div>
            </div>
            <div className="row testimonial-card-user-info-row">
                <div className="col testimonial-card-user-info-col">
                    <div className="testimonial-card-user-img">
                        <img src="/Images/userImg.png" alt="img" />
                    </div>
                    <div className="testimonial-card-user-info">
                        <p className="t-n">{obj.userName}</p>
                        <p className="t-p">{obj.position},{obj.companyName}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const Testimonial = ()=>{
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 131 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 428, min: 0 },
            items: 1,
            partialVisibilityGutter: 22 // this is needed to tell the amount of px that should be visible.
        }
    }

    const testimonialList = [
        {
            id:1,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:2,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:3,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:4,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:5,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:6,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        },
        {
            id:7,
            rating:5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            userName: "Name Surname",
            position: "Position",
            companyName:"Company name"
        }
    ]
    return (<>
        <div className="testimonial-container">
            <div className="row">
                <div className="col text-center">
                    <p className="testimonial-title">Customer testimonials</p>
                </div>
            </div>
            <div className="row">
                <div className="col testimonial-carousel-container">
                    <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["desktop","tablet", "mobile"]} partialVisible={true}>
                        {testimonialList.map((obj, index) => (
                            <TestimonialCard key={index} obj={obj}/>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </>)
}

export default Testimonial;