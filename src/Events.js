import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.avif'
import homeimg from './images/homeimg.png'
import bgvideo from './images/bgvideo.mp4'
import elevate from './images/Elevate.mp4'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import irl1 from './images/irl1.avif'
import irl2 from './images/irl2.avif'
import irl3 from './images/irl3.avif'
import irl4 from './images/irl4.avif'
import irl5 from './images/irl5.avif'
import irl6 from './images/irl6.avif'
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import partners from './images/partners.png'
import aboutusimg from './images/aboutusimg.mp4'
import about from './images/about.png'
import aboutvideo from './images/aboutvideo.mp4'
import contact from './images/contact.mp4'
import { ethers } from 'ethers';
import { signInWithGoogle } from "./firebase-config";
import TelegramLogin from './TelegramLogin';
import ChromeDinoGame from 'react-chrome-dino';
import Marquee from "react-fast-marquee";
import partnersimage from './images/partnersimage.png'
import partnersimage2 from './images/partnersimage2.png'
import { XEmbed } from 'react-social-media-embed';
import ScrollAnimation from 'react-animate-on-scroll';
import { SocialIcon } from 'react-social-icons'
import Typewriter from "typewriter-effect";
import moi from './images/moi.png'
import plutope from './images/plutope.avif'
import polygon from './images/polygon.png'
import router from './images/router.png'
import qoneqt from './images/qoneqt.png'
import icp from './images/icp.png'
import stellar from './images/stellar.png'
import bharatbox from './images/bharatbox.png'
import inco from './images/inco.avif'
import coinstore from './images/coinstore.avif'
import graph from './images/graph.png'
import propeers from './images/propeers.avif'
import defiverse from './images/defiverse.avif'
import ai from './images/ai.gif'
import homeimage from './imagesEvents/event.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from 'react-bootstrap/Accordion';
import AIAgent from './images/AIAgent.png'
import Carousall from './images/Carousal1.png';
import Carousal2 from './images/Carousal2.png';
import Carousal3 from './images/Carousal3.png';
import team from './images/team.png'
import testimonials from './images/testimonials.png'
import page2 from './imagesEvents/page2.mp4'
import a1 from './imagesEvents/agenda2/one.png'
import a2 from './imagesEvents/agenda2/two.png'
import a3 from './imagesEvents/agenda2/three.png'
import t1 from './imagesEvents/t1.png'
import t2 from './imagesEvents/t2.png'




function Events() {

    const [account,setAccount]=useState('Connect Wallet')
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const projectId = 'd1b8ecd12b45222ded58ecacaf0afcce'

    const notify = () => toast("Email copied to clipboard !");
    const notify1 = () => toast("Submitted. We will reach out to you soon !");



  return (
    <div>
  

      <Navbar expand="lg" data-bs-theme="dark" className="bg-black" type="sticky">
      <Container>
      <Navbar.Brand href="#home"><img style={{width:'10em'}} src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#agenda">Agenda</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
           

            <Nav.Link>
            

   <button class="button-85">GET YOUR TICKET</button>


            </Nav.Link>
            <Nav.Link>
<TelegramLogin/>
            </Nav.Link>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

 <div class="homepage">
 
    {/* <video
      class="homeimg"
        autoPlay
        loop
        muted
        src={elevate} // Replace with your video path
     
      >
        Your browser does not support the video tag.
      </video> */}
    

      <div
      style={{
        position: "relative",
        display: "inline-block",
        width:'100%'
      }}
    >
      <img
       src={homeimage}
        alt="Example"
        style={{
          display: "block",
          width:'100%'
        }}
      />
      <button
       class="button-85" 
        style={{
          position: "absolute",
          width:'30%',
         
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        
         
        }}
      >
      REGISTER NOW
      </button>

      <div
  style={{
    width: '100%',
    backgroundColor: 'purple',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Ensures vertical centering
   
    color: 'white',
  }}
>
   
  <h6 style={{   textSshadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    whiteSpace: 'nowrap'}}>The Bootcamp Starts on 7th Jan. Book your ticket now!</h6>
   
</div>

    </div>
    
   
<br></br>
<video autoPlay loop muted style={{width:'100%'}}>
        <source src={page2}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    <br></br><br></br>
  


    
      {/* Other content can go here */}
      
  
  
      
   
          
            
   
    
  

    
 
   
   
  
  

<div id="partners"></div>
  <section style={{color:'white'}}>
        <h2>Trusted By</h2>
        We are proud to collaborate with our esteemed partners.
        <br></br> <br></br> <br></br> 
        <div class="slider">
            <div class="slider-items">
                <img src={icp}
                    alt="" />
                <img style={{width:'20em'}} src={router}
                    alt="" />
                <img src={bharatbox}
                    alt="" />
                <img src={qoneqt}
                    alt="" />
                <img style={{width:'10em'}} src={graph}
                    alt="" />
                <img style={{width:'15em'}} src={coinstore} alt=""/>
                <img src={polygon}
                    alt="" />
                     <img style={{width:'5em'}} src={moi}
                    alt="" />
                <img style={{width:'15em'}} src={stellar}
                    alt="" />
              
               
                <img style={{width:'10em'}} src={plutope}
                    alt="" />
                <img src={polygon}
                    alt="" />
                <img src={defiverse}
                    alt="" />
                <img src={propeers} alt=""/>
               


            </div>
        </div>

    </section>

    <br></br>
    <br></br>
<div style={{color:'white'}}>
  <h2>
    <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("250+ IRL Events Conducted")
                        .pauseFor(200)
                        .deleteAll()
                        .typeString("20,000+ Developers Onboarded")
                        .pauseFor(200)
                        .deleteAll()
                        .start();
                }}
                options={{
                  wrapperClassName: 'text-white'  // Makes the typewriter text white
              }}

              

              
            />
            </h2>
            </div>

            <div>
    
    </div>
  <div id="agenda"></div>

  <img src={a1} style={{width:'100%'}}></img>
  <br/>
  <img src={a2} style={{width:'100%'}}></img>
  <br></br>
  <img src={a3} style={{width:'100%'}}></img>

  <img src={t1} style={{width:'100%'}}></img>
  <br/>
  <img src={t2} style={{width:'100%'}}></img>
  <br></br>



 <br></br><br></br>
 <h2 style={{color:'white'}}> Learn Blockchain Develpoment by Industry Expert</h2>
<img style={{width:'20em'}} src={ai}></img>
<br></br>
<div id="about"></div>
<img src={about} style={{width:'100%'}}></img>

    <a style={{height:'70%'}} href='https://t.me/connectverseweb3'><button style={{ height:'70%'}} class="button-85" role="button">Join Our Community </button></a>



 </div>

    
<img src={team} style={{width:'100%'}}></img>

 
   
    <center>

      <br/><br></br>
      <h1 style={{color:'white'}}>FAQs</h1>
      <br></br>
      <Accordion defaultActiveKey="0" className="custom-accordion">
  <Accordion.Item eventKey="0" className="custom-accordion-item">
    <Accordion.Header>1. How long is the bootcamp? </Accordion.Header>
    <Accordion.Body>
    The bootcamp is a 4-hour offline session, packed with hands-on learning and networking opportunities.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item">
    <Accordion.Header>2. Where will the bootcamp be held?</Accordion.Header>
    <Accordion.Body>
    The bootcamp will take place at Draper Startup House, Bangalore. Participants will receive detailed location and timing information upon registration.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" className="custom-accordion-item">
    <Accordion.Header>3. Do I need prior coding experience to join?
    </Accordion.Header>
    <Accordion.Body>
    No prior experience is required! The bootcamp is beginner-friendly and designed to introduce you to blockchain technology.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3" className="custom-accordion-item">
    <Accordion.Header>4. What will I learn during the bootcamp?</Accordion.Header>
    <Accordion.Body>
   In just 4 hours, you’ll:

Understand the basics of blockchain and smart contracts
Get an introduction to Solidity programming
Build a simple decentralized application (dApp)
Learn how to deploy your first smart contract

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" className="custom-accordion-item">
    <Accordion.Header>5. Who are the instructors?
   </Accordion.Header>
    <Accordion.Body>
    The bootcamp will be conducted by industry experts and blockchain developers with real-world experience in the Web 3 space.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5" className="custom-accordion-item">
    <Accordion.Header>6. Will I receive a certificate of participation?
   </Accordion.Header>
    <Accordion.Body>
    Yes, all attendees will receive a certificate of participation after completing the session.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6" className="custom-accordion-item">
    <Accordion.Header>7. Will I receive a certificate of participation?
   </Accordion.Header>
    <Accordion.Body>
    Yes, all attendees will receive a certificate of participation after completing the session.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="7" className="custom-accordion-item">
    <Accordion.Header>8. Are there any fees for the bootcamp?
   </Accordion.Header>
    <Accordion.Body>
    The bootcamp fee is Rs. 250 , which includes learning materials, live instructions, and access to follow-up resources.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="8" className="custom-accordion-item">
    <Accordion.Header>9. Are there any fees for the bootcamp?
   </Accordion.Header>
    <Accordion.Body>
    The bootcamp fee is Rs. 250 , which includes learning materials, live instructions, and access to follow-up resources.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="9" className="custom-accordion-item">
    <Accordion.Header>10. What should I bring to the bootcamp?
   </Accordion.Header>
    <Accordion.Body>
    Please bring:

Your laptop with a working internet connection
A notebook and pen for taking notes
Enthusiasm to learn and explore!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="10" className="custom-accordion-item">
    <Accordion.Header>11. Is there any post-bootcamp support?
   </Accordion.Header>
    <Accordion.Body>
    Yes, participants will gain access to a community of learners and mentors to continue their blockchain journey.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<br></br>


      <div id="contact"></div>
 
<div style={{backgroundColor:'black'}}> 

<br></br>

<br></br><br></br><br></br><br></br>
<hr style={{backgroundColor:'white', color:'white'}}></hr>
<br></br><br></br><br></br><br></br>
<ToastContainer />
<div style={{color:'white'}}>
Find Us On
<br></br><br></br><br></br>
<SocialIcon network="email" onClick={()=>{
  navigator.clipboard.writeText("connectversesp@gmail.com").then(
    () => {
     notify()
    },
    (err) => {
      alert("Failed to copy email address. Please try again.");
      console.error("Error copying email to clipboard: ", err);
    }
  );
}}/>

&nbsp;&nbsp;&nbsp;
<SocialIcon url="https://x.com/connectverse3" />
&nbsp;&nbsp;&nbsp;
<SocialIcon url="https://www.youtube.com/channel/UCXFScMQoAZCphx44xk0u27Q"/>
&nbsp;&nbsp;&nbsp;
<SocialIcon url="https://in.linkedin.com/company/connect-verse"/>
&nbsp;&nbsp;&nbsp;
<SocialIcon url="https://t.me/connectverseweb3"/>
&nbsp;&nbsp;&nbsp;
<SocialIcon url="https://www.instagram.com/connectverse.events/"/>
<br></br><br></br><br></br><br></br>
<img style={{width:'8em'}} src={logo}></img>
&nbsp;
All Rights Reserved
<br></br>
<br></br>
<div></div>
</div>
</div>
</center>

      </div>
   
  )
}

export default Events



