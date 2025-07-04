import './Founders.css';

const Founders = () =>{
    const foundersList = [
        {id:1,name:'Forhad Sharif',title:'COO & Founder',img:'/Images/founder1.png'},
        {id:2,name:'Forhad Sharif',title:'COO & Founder',img:'/Images/founder2.png'}
    ]
    return (<>
        <div className="founders-container">
            {
                foundersList.map((item,index)=>(
                    <div className="founders-card" key={index}>
                        <div className="founders-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <p className="founder-name">{item.name}</p>
                        <p className="founder-title">{item.title}</p>
                    </div>
                ))
            }
        </div>
    </>)
}

export default Founders;