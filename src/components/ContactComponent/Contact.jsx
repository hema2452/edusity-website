import "./Contact.css"







import message from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import arrow from "../../assets/white-arrow.png"
import { useState } from "react"
import Title from "../TitleComponent/Title"
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ccbb1269-ce65-4c5e-9ac8-88cf13b2a842");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if(data.success){
        setResult(data.message);
        event.target.reset("");
    }
    else{
        setResult(data.message)
    }
}

  return (
    <>
    <Title title="Contact Us" subtitle="Get in touch"></Title>
      <div className="contact container">
        <div className="contact-left-container">
            <h1>Send Us a message <img src={message} alt="message-image" /></h1>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li>
                    <img src={mail} alt="mail-icon" />
                    contact@edusity.com
                </li>
                <li>
                    <img src={phone} alt="phone-image" />
                    +91 123-456-7890
                </li>
                <li>
                    <img src={location} alt="location-image" />
                        12,aaaaaaaaaa, bbbbbbbb <br />
            aa012345, India
                </li>
            </ul>
        </div>
        <div className="contact-right-container">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Enter yout name" />                
                <label htmlFor="phone">Your Phone Number</label>
                <input type="number" name="phone" id="phone" placeholder="Enter your mobile number" />
                <label htmlFor="email"> Your Email </label>
                    <input type="email" name="email" id="email" placeholder="Enter your emaili" />
                <label htmlFor="textarea">Write Your messages here</label>
    
                <textarea name="textarea" id="textarea" rows="6" placeholder="Enter your message"></textarea>
                <button className="btn">Submit now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        
        </div>

    </div>
    </>
  
  )
}

export default Contact