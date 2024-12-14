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
import homeimage from './images/homeimage.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from 'react-bootstrap/Accordion';
import AIAgent from './images/AIAgent.png'
import Carousall from './images/Carousal1.png';
import Carousal2 from './images/Carousal2.png';
import Carousal3 from './images/Carousal3.png';
import team from './images/team.png'
import testimonials from './images/testimonials.png'

function Home() {

    const [account,setAccount]=useState('Connect Wallet')
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const projectId = 'd1b8ecd12b45222ded58ecacaf0afcce'

    const notify = () => toast("Email copid to clipboard !");
    const notify1 = () => toast("Submitted. We will reach out to you soon !");



  return (
    <div>
  

      <Navbar expand="lg" data-bs-theme="dark" className="bg-black" type="sticky">
      <Container>
      <Navbar.Brand href="#home"><img style={{width:'10em'}} src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Nav.Link>

            <button className='button-21' style={{width:'8em',height:'2em'}} onClick={
              
              
              
              
              async()=>{
                try{
                  const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                   });
                   const provider = new ethers.providers.Web3Provider(window.ethereum)
                   setAccount(accounts[0].substring(0, 4)+'....'+accounts[0].substring(accounts[0].length - 4))
                   localStorage.setItem('account',accounts[0])
                   window.location()

                }
                catch(err){
                  if(!window.ethereum)
                  window.location.href='https://metamask.io/'
               
                }



         }
         
         
         }>{localStorage.getItem('account')!=undefined?localStorage.getItem('account').substring(0, 4)+'....'+localStorage.getItem('account').substring(localStorage.getItem('account').length - 4):account}</button>



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
      <img src={homeimage} style={{width:'100%'}}></img>

    
 
   
    
      <a style={{width:'100%',height:'70%'}} href='https://calendly.com/quantumworld394/30min'><button style={{width:'70%', height:'70%'}} class="button-85" role="button">Book a Call</button></a>
     
<br></br>
     
    <br></br>
  


    
      {/* Other content can go here */}
      
  
  
      
   
          
            
   
    
  

    
 
   
   
  
  


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
                        .typeString("50+ Happy Clients")
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

  <img src={Carousall} style={{width:'100%'}}></img>
  <br></br>
  <img src={Carousal2} style={{width:'100%'}}></img>
  <br></br>
  <img src={Carousal3} style={{width:'100%'}}></img>
<br></br>


 <br></br><br></br>
 <h2 style={{color:'white'}}> Automate your onboarding process with ConnectVerse</h2>
<img style={{width:'20em'}} src={ai}></img>
<br></br>
<img src={about} style={{width:'100%'}}></img>

    <a style={{width:'100%',height:'70%'}} href='https://t.me/connectverseweb3'><button style={{width:'70%', height:'70%'}} class="button-85" role="button">Join Our Community </button></a>

    <div className="canva-embed-container">
      <iframe
        loading="lazy"
        src=" https://www.canva.com/design/DAGZLLrG4aI/xebTTAC7d6rrcHL00006LA/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>



    <a style={{width:'100%',height:'70%'}} href='https://calendly.com/quantumworld394/30min'><button style={{width:'70%', height:'70%'}} class="button-85" role="button">Partner With Us</button></a>
     


 </div>
 <br></br><br></br>
 <img src={testimonials} style={{width:'100%'}}></img>
 <br></br><br></br>
    
<img src={team} style={{width:'100%'}}></img>

 
   
    <center>

      <br/><br></br>
      <h1 style={{color:'white'}}>FAQ</h1>
      <br></br>
      <Accordion defaultActiveKey="0" className="custom-accordion">
  <Accordion.Item eventKey="0" className="custom-accordion-item">
    <Accordion.Header>How can ConnectVerse help my Web 3.0 brand? </Accordion.Header>
    <Accordion.Body>
    ConnectVerse specializes in onboarding developers and users to your ecosystem through immersive events like bootcamps, workshops, and hacker houses. We provide a tailored approach to engage and grow your community, ensuring your brand is positioned for success in the decentralized ecosystem.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item">
    <Accordion.Header>How can ConnectVerse help onboard developers to my Web 3.0 project?</Accordion.Header>
    <Accordion.Body>
    Through our targeted bootcamps and workshops, we help developers understand the technical aspects of your project, providing them with the necessary tools and knowledge to contribute to your ecosystem. We also host hands-on sessions where they can build real-world solutions using your technology.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item">
    <Accordion.Header>What types of events does ConnectVerse organize for Web 3.0 brands?</Accordion.Header>
    <Accordion.Body>
    We organize bootcamps, workshops, hackathons, and hacker houses to help your brand connect with developers, users, and influencers. These events are designed to boost community engagement, showcase your project’s technology, and attract new users or developers to your ecosystem.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item">
    <Accordion.Header>Can ConnectVerse help with user acquisition for my platform?</Accordion.Header>
    <Accordion.Body>
    Yes, we help attract and onboard users to your platform by organizing educational and engaging events that introduce them to the benefits of your Web 3.0 ecosystem. These events increase awareness and create a community of active users who are invested in your project’s success.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item">
    <Accordion.Header>Can ConnectVerse help us with community building and engagement?</Accordion.Header>
    <Accordion.Body>
    Absolutely! Community building is a core part of what we do. Through consistent engagement, hands-on learning opportunities, and community-centric events, we help your brand establish a loyal and active user base. Our events also encourage networking and collaboration, creating a thriving ecosystem for your project.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<br></br>
<div className="canva-embed-container">
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAGZLmgoPXY/63yAKonNcVfbHZvirGI9lQ/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
    </div>


<iframe
src="https://www.chatbase.co/chatbot-iframe/dKPjWH2ngM-yLWxO0iOb4"
width="100%"
style={{height: '100%', minHeight: '700px'}}
frameborder="0"
></iframe>
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
<SocialIcon url="https://www.instagram.com/connectverse.tech/"/>
<br></br><br></br><br></br><br></br>
<img style={{width:'15em'}} src={logo}></img>
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

export default Home



