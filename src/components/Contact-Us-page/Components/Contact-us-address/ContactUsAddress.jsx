import './ContactUsAddress.css';
const ContactUsAddress = () =>{
    return (<>
        <div className="contact-us-address-container">
            <div class="contact-us-address-parent">
                <div class="contact-us-address-div1">
                    <div className="contact-us-address-card" style={{ height: "66px" }}>
                        <ul className="contact-us-address-type">
                            {/* <li><a>Instagram</a></li> */}
                            <li><a href="https://www.linkedin.com/company/revoir-x/">Linkedin</a></li>
                            {/* <li><a>Youtube</a></li>
                            <li><a>Discord</a></li> */}
                            {/* <li><a>Instagram</a></li> */}
                        </ul>
                    </div>
                </div>
                <div class="contact-us-address-div2">
                    <div className="contact-us-address-img">
                        <img src='/Images/Placeholder Image.png'/>
                    </div>
                </div>
                <div class="contact-us-address-div3">
                    <div className="contact-us-address-card address-card text-center" style={{ height: "auto%" }}>
                        <p className="contact-us-address-div-3-card-sub-heading extra-margin">General</p>
                        <p className="contact-us-address-div-3-card-email">info@revoirx.com</p>
                        {/* <p className="contact-us-address-div-3-card-number">+1 414 207 9724</p> */}
                        <p className="contact-us-address-div-3-card-sub-heading address-extra-margin">Address</p>
                        <div className="contact-us-address-div-3-address-box">
                            <p className="contact-us-address-div-3-address">61 Union Street, Dunstable, England, LU61EX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default ContactUsAddress;