import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Need Help with or want details regarding Freshers Party?</p>
      </header>
      <div className="contacts">
        <div>
        <a href="tel:+919510926741"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919510926741">(+91) 9510926741</a>
        </div>  
      </div>
      
    </Container>
  )
}