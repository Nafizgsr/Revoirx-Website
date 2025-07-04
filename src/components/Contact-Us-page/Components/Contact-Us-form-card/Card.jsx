import './Card.css';
const Card = ()=>{
    return (<>
        <div className="contact-us-form-card">
                <p className="contact-us-form-card-heading">Send a line about your project</p>
                <input type="text" className="contact-us-form-input" placeholder='Enter your name'/>
                <input type="text" className="contact-us-form-input" placeholder='Enter your mail'/>
                <textarea type="text" className="contact-us-form-input contact-us-form-text-area" placeholder='Enter your message'></textarea>
                <button className="contact-us-btn">
            Send message
            <div className="contact-us-icon">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7803 1.15356L20.0002 8.99983L11.7803 16.8461"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 8.99976L1 8.99976"
                  strokeWidth="1.28571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
            </div>
    </>)
}

export default Card;