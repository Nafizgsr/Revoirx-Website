import './Reason.css';

const ReasonCard = ({obj})=>{
    return(<>
        <div className="reason-card">
            <div className="reason-icon-div">
                <div className="reason-icon-img-div">
                    <img src='/logos/Tick.svg'/>
                </div>
            </div>
            <p className="reason-card-header">
                    {obj.title}
            </p>
            <p className="reason-card-description">
                {obj.description}
            </p>
        </div>
    </>)
}

const Reason = ()=>{
    const reasonList = [
        {id:1,title:'Customers first',description:'Nothing matters more than the businesses and freelancers Hopscotch supports.'},
        {id:2,title:'Listen then talk',description:'Don’t rush into a solution before you fully understand the problem.'},
        {id:3,title:'Keep it real',description:'Get to the point in a human way. Avoid buzzwords, acronyms, and jargon.'},
        {id:4,title:'Learn from failure',description:'We all mess up. What’s the takeaway that makes the stumble worthwhile?'},
        {id:5,title:'Check your ego',description:'When no one needs to be king of the hill, we can move mountains together.'},
        {id:6,title:'Customers first',description:'Nothing matters more than the businesses and freelancers Hopscotch supports.'}
    ]
    return (<>
        <div className="reason-container">
            <p className="reason-header">
                It's in our DNA
            </p>

            <div className="reason-grid">
                {reasonList.map((item,index)=>(
                    <ReasonCard key={index} obj={item}/>
                ))}
            </div>
        </div>
    </>)
}
export default Reason;