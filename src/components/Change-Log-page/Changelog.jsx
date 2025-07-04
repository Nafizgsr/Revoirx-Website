import './Changelog.css';
import Navbar from '../Navbar/Navbar';
import Subintro from '../Sub-Intro/Subintro';
import Footer from '../Footer/Footer';

const ChangelogInfoList = ({list})=>{
    return (<>
        {
            
                list.map((item,index)=>(
                    <div className="changelog-info-container" key={index}>
                        <div className="changelog-info-sub-container">
                                <div className="changelog-info-version-container">
                                    <p className="changelog-info-version-heading">{item.version}</p>
                                    <p className="changelog-info-version-date">{item.date}</p>
                                </div>
                                <div className="changelog-info-description-container">
                                    <p className="changelog-info-description-heading">{item.heading}</p>
                                    {
                                        item.SubList.map((item,index)=>(
                                            <div className="changelog-info-description-sub-info" key={index}>
                                                <p className="changelog-info-description-sub-head">{item.subHeading}</p>
                                                <p className="changelog-info-description-sub-des">{item.subDes}</p>
                                            </div>
                                        ))
                                    }
                                    {
                                        item.image && 
                                        <div className="changelog-info-description-img">
                                            <img src={item.image} alt="img" />
                                        </div>
                                    }
                                </div>
                            </div>    
                    </div>
                ))
        }
    </>)
}

const Changelog = () =>{
    const changelogList = [
        {id:1,heading:'AI Generator UI Update',version:'Version 1.2.0', date:'Jul 16, 2025',image:'/Images/image.png',description:"Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.",SubList:[
            {id:1,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:2,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:3,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."}
        ]},
        {id:2,heading:'AI Generator UI Update',version:'Version 1.2.0', date:'Jul 16, 2025',image:'',description:"Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.",SubList:[
            {id:1,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:2,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:3,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."}
        ]},
        {id:3,heading:'AI Generator UI Update',version:'Version 1.2.0', date:'Jul 16, 2025',image:'',description:"Cursus felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate.",SubList:[
            {id:1,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:2,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."},
            {id:3,subHeading:'Essential Tab:',subDes:"felis elit pulvinar aliquam ut laoreet nunc mattis sagittis urna tristique diam at morbi vel eget arcu magna sit justo ornare a ante. Eget turpis vitae ultrices quis eu adipiscing tincidunt sollicitudin neque maecenas iaculis pellentesque libero pharetra nisl tellus sodales egestas blandit. Ornare maecenas leo congue nibh arcu eros a lorem leo at proin senectus sit lacus semper nunc vitae nec aenean elementum ipsum vulputate."}
        ]}
    ]
    return (<>
        <Navbar/>
        <div className="changelog-intro-container">
            <Subintro 
            heading="Product updates"
            description="A brief overview of the latest feature releases, product enhancements, design updates, and important bug fixes"
            buttonText="Get Started"
            IsHead = {false}
            IsButton = {true}
            IsInput={true}
            subHeadName = 'Changelog'
            onClick={() => console.log('Button clicked')}
        />
        </div>
        <ChangelogInfoList list={changelogList}/>
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

export default Changelog;