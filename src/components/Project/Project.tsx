import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>OUR TEAM</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              
              <div className="image">
                <img  src="/Images/11zon_IMG_0081.jpg" width={100}/>
              </div>
             
            </header>
            <div className="body">
             <h3>Kevin Goswami</h3>
              
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG_6324.JPG" width={100}/>
            </div>
           
          </header>
          <div className="body">
            <h3>Vansh patel</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              
              <div className="image">
                <img  src="/Images/IMG_5071.JPG" width={100}/>
              </div>
             
            </header>
            <div className="body">
             <h3>Yash Bathia</h3>
              
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              
              <div className="image">
                <img  src="/Images/IMG-20240115-WA0012.jpg" width={100}/>
              </div>
             
            </header>
            <div className="body">
             <h3>Jainesh Dalwadi</h3>
              
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG_20230928_160834_626.jpg" width={100}/>
            </div>
           
          </header>
          <div className="body">
           <h3>Dev Purohit</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG_2658.JPG" width={100}/>
            </div>
           
          </header>
          <div className="body">
           <h3>Rohan Chauhan</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG_2444.jpg" width={100}/>
            </div>
           
          </header>
          <div className="body">
           <h3>Jal Bhatt</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG-20240604-WA0002(1).jpg" width={100}/>
            </div>
           
          </header>
          <div className="body">
           <h3>Tirth patel</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
            
            <div className="image">
              <img  src="/Images/IMG-20240123-WA0084.jpg" width={100}/>
            </div>
           
          </header>
          <div className="body">
           <h3>Shubh patel</h3>
            
          </div>
        </div>
      </ScrollAnimation>
      <div  className="soham">

      <ScrollAnimation animateIn="flipInX">
  <div className="project" style={{ textAlign: 'center' }}>
    <header>
      <div className="image">
        <img src="/Images/WhatsApp Image 2024-09-19 at 11.16.04 PM.jpeg" width={100} />
      </div>
    </header>
    <div className="body">
      <h3>Soham kava</h3>
      <h4>Web Developer</h4>
    </div>
  </div>
</ScrollAnimation>
</div>
      
      

                {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
        
        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}