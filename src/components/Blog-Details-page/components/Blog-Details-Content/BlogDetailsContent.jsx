import './BlogDetailsContent.css';

const BlogDetailsContent = () => {
    return (<>
        <div className="blog-details-content-container">
            <p className="blog-details-content-description">Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.</p>
            <div className="blog-details-content-img">
                <img src='/Images/image.png'/>
            </div>
            <p className="blog-details-content-description">Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.</p>
            <p className="blog-details-content-heading">What we did</p>
            <p className="blog-details-content-description">
                Sit vulputate aliquam cras aliquam Et, nibh congue consequat pellentesque Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices ultricies viverra Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non Morbi id massa interdum nam tellus Magna nunc interdum tellus neque auctor sagittis. Sit vulputate aliquam cras aliquam Et, nibh congue consequat pellentesque Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices ultricies viverra Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non Morbi id massa interdum nam tellus Magna nunc interdum tellus neque auctor sagittis.
            </p>
            {
                [...Array(4)].map((_,index)=>(
                    <div key={index}>
                        <p className="blog-details-content-heading" key={index}>What we did</p>
                        <p className="blog-details-content-description" key={index}>
                            Sit vulputate aliquam cras aliquam Et, nibh congue consequat pellentesque Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices ultricies viverra Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non Morbi id massa interdum nam tellus Magna nunc interdum tellus neque auctor sagittis. Sit vulputate aliquam cras aliquam Et, nibh congue consequat pellentesque Metus fermentum dui pellentesque morbi volutpat commodo viverra. Feugiat nulla non mattis mi Bibendum diam tempus ultrices ultricies viverra Feugiat placerat viverra tortor orci feugiat. Scelerisque dictum consequat egestas enim, at orci. Eu a posuere aliquam sed aliquam tortor non Morbi id massa interdum nam tellus Magna nunc interdum tellus neque auctor sagittis.
                        </p>
                    </div>
                ))
            }
        </div>
    </>)
}

export default BlogDetailsContent;