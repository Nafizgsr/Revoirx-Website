import './Subintro.css';

const Subintro = ({ heading, description, buttonText, IsHead , subHeadName , IsButton , IsSecondButton , secontBtnText , IsInput , onClick }) => {
  return (
    <div className="subintro-container">
      {
        IsHead == false &&
        <div className="row subintro-name-row">
        <div className="col text-center" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="subintro-name-div">
            <p>{subHeadName}</p>
          </div>
        </div>
      </div>
      }
      <div className="subintro-head-row">
        <div className="text-center">
          <p className={`${IsHead ? 'subintro-heading1' : 'subintro-heading2'}`}>{heading}</p>
        </div>
      </div>
      <div className="subintro-description-row">
        <div className="text-center">
          <p className="subintro-description">{description}</p>
        </div>
      </div>
      {
      IsButton == true &&
        <div className={`${IsInput ? 'subintro-btn-row-is-input' : 'subintro-btn-row-no-input'}`}>
        <div className="subintro-btn-col">
          {
            IsInput &&
            <input type="text" className="subintro-input-box" placeholder='Enter your mail' />
          }
          <button className={`subintro-btn ${IsSecondButton ? 'subintro-secont-btn':''}`} onClick={onClick}>
            {buttonText}
            <div className="subintro-icon">
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
          {
            IsSecondButton &&
            <button className={`subintro-btn ${IsSecondButton ? 'subintro-secont-btn':''}`} onClick={onClick}>
            {secontBtnText}
            <div className="subintro-icon">
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
          }
        </div>
      </div>
      }
    </div>
  );
};

export default Subintro;
