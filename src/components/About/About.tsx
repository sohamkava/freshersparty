import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
// import { title } from "process";
// import { title } from "process";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Glimpse of Neophytes24</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Join us for an unforgettable night of celebration as we welcome our newest members to the GSFCU family. Lets come together to create lasting memories and embark on a new chapter filled with friendship, learning, and growth. We look forward to seeing you there
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p><h3>EVENT DETAILS</h3>
              <ul>
                <li>Date: 28th SEP 2024</li>
                <li>Time: 18:00 to 22:00</li>
                <li>Place: Hotel Surya Palace</li>
              </ul>
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          <h3>Awards Of The Night 🏆</h3>
          <ul>
            <li>Mr. Freshers</li>
            <li>Ms. Freshers</li>
            <li>Best Jodi</li>
            <li>Mr. Attraction Of the Night</li>
            <li>Ms. Attraction Of the Night</li>
            <li>DaringBazz Of the Night</li>
          </ul>
          </p>
        </ScrollAnimation>

       
      </div>
      <div className="about-image" >
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={"/Images/F2.jpg"} alt="hotel" width={400} title="hotel surya"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={"/Images/F3.jpg"} alt="group photo" width={400} title="group photo"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
