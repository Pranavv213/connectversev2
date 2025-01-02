import React,{useState,useEffect} from 'react'
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
import plutope from './images/plutope.svg'
import polygon from './images/polygon.png'
import router from './images/router.svg'
import qoneqt from './images/qoneqt.png'
import icp from './images/icp.png'
import stellar from './images/stellar.png'
import bharatbox from './images/bharatbox.png'
import inco from './images/inco.avif'
import coinstore from './images/coinstore.png'
import graph from './images/graph.png'
import propeers from './images/propeers.avif'
import defiverse from './images/defiverse.png'
import ai from './images/ai.gif'
import homeimage from './images/homeimage.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from 'react-bootstrap/Accordion';
import AIAgent from './images/AIAgent.png'
import Carousall from './images/Carousal1.png';
import Carousal2 from './images/Carousal2.png';
import Carousal3 from './images/Carousal3.png';
import team from './images/team.png'
import testimonials from './images/testimonials.png'
import p1 from './images/partnership/p11.png'
import p2 from './images/partnership/p22.png'
import w1 from  './images/w1.png'
import Cubane from './images/Cubane.webp'
import homeimage_2 from './images/homeimage_2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import event1 from './images/event1.avif';
import event2 from './images/event2.avif';
import event3 from './images/event3.avif';
import event4 from './images/event4.avif';
import founder from './images/Team/founder.jpg'
import advisor from './images/Team/advisor.jpg'
import bd from './images/Team/bd.jpg'
import events from './images/Team/events.JPG'
import CLB from './images/Team/CLB.jpeg'
import design from './images/Team/design.jpg'
import technology from './images/Team/technology.png'


function Home() {


  const timestamp = new Date().getTime();

 
  

  const [showGif, setShowGif] = useState(true);

    const [account,setAccount]=useState('Connect Wallet')
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const projectId = 'd1b8ecd12b45222ded58ecacaf0afcce'

    const notify = () => toast("Email copied to clipboard !");
    const notify1 = () => toast("Submitted. We will reach out to you soon !");
    useEffect(() => {
     
        AOS.init({ duration: 1000 });
    }, []);


  return (
    <div>
  

      <Navbar expand="lg" data-bs-theme="dark" className="bg-black" type="sticky">
      <Container>
      <Navbar.Brand href="#home"><img style={{width:'10em'}} src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#partner">Become a Partner</Nav.Link>

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
     
      <img 
        src={ homeimage} 
        style={{width:'100%'}}
        alt="Image" 
      />

    
      <center>
   
    
      <a style={{height:'70%'}} href='https://t.me/connectverseweb3'><button style={{ height:'70%'}} class="button-85" role="button">Join Our Community</button></a>
      </center>
<br></br>
     
    <br></br><br></br>
  


    
      {/* Other content can go here */}
      
  
  
      <br></br>
<h2 style={{color:'white'}}>Recent Events</h2>
<br></br>
<div class="partnerus"  data-aos="zoom-in" >
    <br></br><br></br><br></br>
   
    <br></br>

    <Card style={{ width: '25rem' }} >
      <Card.Img variant="top" src={event4} />
      <Card.Body>
        <Card.Title>2025 Web3 Kickstart with Stellar</Card.Title>
        <Card.Text>
          Jan 11 , 2025
        </Card.Text>
        <a href="https://lu.ma/oxofh8e3"> <button class="button-85">Register</button></a>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={event3} />
      <Card.Body>
        <Card.Title>Fireside chat with Kunal Kushwaha</Card.Title>
        <Card.Text>
         8th December , 2024
        </Card.Text>
        <Button variant="primary">Registrations Closed</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={event2} />
      <Card.Body>
        <Card.Title>Web3Utsav with MOI & Qoneqt</Card.Title>
        <Card.Text>
        24th Nov , 2024
        </Card.Text>
        <Button variant="primary">Registrations Closed</Button>
      </Card.Body>
    </Card>


    </div>
   
          <br></br> <br></br> <br></br>
         
  <br></br><br></br><br></br>
      <center>
        <h2 style={{color:'white'}}>Our Partners</h2>
    <l style={{color:'white'}}>Proud to collaborate with our esteemed partners.</l>
     </center>
     <br></br>

     <div className="table-container" style={{ 
  display: 'flex', 
  flexWrap: 'wrap', 
  justifyContent: 'center', 
  gap: '1em' 
}}>
  
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={router} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={bharatbox} 
      alt="" 
    />
  </div>
  
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={coinstore} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%)',
        padding: '1em' 
      }} 
      src={stellar} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%)',
        padding: '1em' 
      }} 
      src={plutope} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={Cubane} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={polygon} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={propeers} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={qoneqt} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={graph} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '8em', 
        height: '8em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={moi} 
      alt="" 
    />
  </div>
  <div style={{ textAlign: 'center', verticalAlign: 'middle', flex: '1 1 20%' }}>
    <img 
      style={{ 
        width: '10em', 
        height: '10em', 
        objectFit: 'contain', 
        filter: 'grayscale(100%) invert(100%) brightness(100%)',
        padding: '1em' 
      }} 
      src={icp} 
      alt="" 
    />
  </div>
 
</div>
<br></br><br></br><br></br><br></br><br></br>
   
    <div id="partner"></div>
    <center>
      <div class="partnerus" style={{ 
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)',color:'white',  textAlign: 'left'}} data-aos="slide-up" >
      <div style={{margin:'2em'}}>
        <center>
     
      <h2>
  
            Why Partner Us ?
            </h2>
            </center>
        <br></br> <br></br>
        <b style={{color:'violet'}}>
      1. Workshop Promotion:</b> We'll actively promote your products or services during our workshops, giving your brand increased recognition.
      <br></br> <br></br>
      <b style={{color:'violet'}}>
2. Community Expansion:</b> Attract numerous developers and community members to boost your own community's growth.
<br></br> <br></br>
<b style={{color:'violet'}}>
3. Educational Institution Visibility: </b>Gain prominence in various educational institutions, both online and offline, by participating in our roadshow.
<br></br> <br></br>
<b style={{color:'violet'}}>
4. User Onboarding:</b> Attract and onboard new users into your ecosystem, expanding your influence and reach.
<br></br> <br></br>
<b style={{color:'violet'}}>
6. Collaborative Events: </b>Join forces with us to conduct workshops, hackathons, quests, and whitelisting events, attracting a diverse range of participants.
<br></br> <br></br>
<b style={{color:'violet'}}>
7. Community Growth:</b> Witness an increase in the number of users and participants within your ecosystem.
<br></br> <br></br>
<b style={{color:'violet'}}>
8. Enhanced Brand Visibility:</b> Reach a broad and diverse audience, significantly amplifying your brand's visibility.

</div>
<a style={{height:'70%'}} href='https://calendly.com/quantumworld394/30min'><button style={{height:'70%'}} class="button-85" role="button">Partner With Us</button></a>
<br></br><br></br><br></br><br></br><br></br>
</div>

</center>
  <br></br><br></br><br></br>
  <h2 style={{color:'white'}}>FAQs</h2>
      <br></br>
      <Accordion  className="custom-accordion" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}} data-aos="flip-up">
  <Accordion.Item eventKey="0" className="custom-accordion-item" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}}>
    <Accordion.Header>How can ConnectVerse help my Web 3.0 brand? </Accordion.Header>
    <Accordion.Body>
    ConnectVerse specializes in onboarding developers and users to your ecosystem through immersive events like bootcamps, workshops, and hacker houses. We provide a tailored approach to engage and grow your community, ensuring your brand is positioned for success in the decentralized ecosystem.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className="custom-accordion-item" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}}>
    <Accordion.Header>How can ConnectVerse help onboard developers to my Web 3.0 project?</Accordion.Header>
    <Accordion.Body>
    Through our targeted bootcamps and workshops, we help developers understand the technical aspects of your project, providing them with the necessary tools and knowledge to contribute to your ecosystem. We also host hands-on sessions where they can build real-world solutions using your technology.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" className="custom-accordion-item" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}}>
    <Accordion.Header>What types of events does ConnectVerse organize for Web 3.0 brands?</Accordion.Header>
    <Accordion.Body>
    We organize bootcamps, workshops, hackathons, and hacker houses to help your brand connect with developers, users, and influencers. These events are designed to boost community engagement, showcase your project’s technology, and attract new users or developers to your ecosystem.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3" className="custom-accordion-item" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}}>
    <Accordion.Header>Can ConnectVerse help with user acquisition for my platform?</Accordion.Header>
    <Accordion.Body>
    Yes, we help attract and onboard users to your platform by organizing educational and engaging events that introduce them to the benefits of your Web 3.0 ecosystem. These events increase awareness and create a community of active users who are invested in your project’s success.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" className="custom-accordion-item" style={{background: 'rgba(90, 30, 212, 0.52)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)'}}>
    <Accordion.Header>Can ConnectVerse help us with community building and engagement?</Accordion.Header>
    <Accordion.Body>
    Absolutely! Community building is a core part of what we do. Through consistent engagement, hands-on learning opportunities, and community-centric events, we help your brand establish a loyal and active user base. Our events also encourage networking and collaboration, creating a thriving ecosystem for your project.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<br></br><br></br><br></br>
  <div id="about"></div>
    <center>
      <div class="partnerus" style={{ 
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(90, 30, 212, 0.84)',color:'white',  textAlign: 'left'}} data-aos="slide-up" >
      <div style={{margin:'2em'}}>
        <center>
     
      <h2>
  
            About Us
            </h2>
            </center>
        <br></br> <br></br>
        <center>
        <h3>
        <b style={{color:'violet'}}>Empowering Web3 Brands to Drive Adoption and Growth</b></h3>
        </center>
        <br></br><br></br>
At ConnectVerse, we are dedicated to accelerating Web3 adoption by providing brands with the tools and strategies they need to onboard both developers and users into their ecosystems seamlessly. Our mission is to bridge the gap between cutting-edge innovation and meaningful engagement, ensuring that projects in the decentralized space not only succeed but thrive in an increasingly complex and competitive market.
<br></br><br></br><br></br>
We understand that the future of Web3 lies in the strength and growth of its communities. That's why we focus on creating tailored strategies that enable Web3 brands to attract, engage, and retain top-tier developers while also growing a loyal and active user base. Whether it’s through specialized bootcamps, hands-on workshops, or immersive hackathons, ConnectVerse offers real-world experiences that foster collaboration, knowledge-sharing, and long-term participation within the Web3 ecosystem.
<br></br><br></br><br></br>
Our expertise lies in understanding the needs of both Web3 brands and the people who interact with them. By leveraging AI and data-driven insights, we provide highly personalized onboarding experiences that streamline the process for developers and users alike. These initiatives ensure that participants not only understand the technology but are also motivated to contribute to its success.
<br></br><br></br><br></br>
As a trusted partner to Web3 brands, ConnectVerse helps create vibrant, sustainable communities around innovative projects. Our goal is to cultivate environments where users and developers feel empowered, engaged, and excited about contributing to the decentralized future. Through education, hands-on experience, and strategic guidance, we ensure that our partners' ecosystems are positioned for long-term growth, scalability, and success.
<br></br><br></br><br></br>
At ConnectVerse, we are proud to be at the forefront of Web3 adoption, driving positive change by helping brands unlock their full potential in the decentralized world.
</div>
<a style={{height:'70%'}} href='https://calendly.com/quantumworld394/30min'><button style={{height:'70%'}} class="button-85" role="button">Partner With Us</button></a>
<br></br><br></br><br></br><br></br><br></br>

<div class="partnerus"  style={{ 
  
  background: 'rgba(169, 18, 237, 0.49)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)', // For Safari support
  border: '1px solid rgba(169, 18, 237, 0.3)',color:'white',backgroundColor:'purple',  textAlign: 'left'}}  >
    <br></br><br></br> <br></br><br></br> <br></br><br></br>
    <h1 style={{color:'white'}}>Our Team </h1>
    <br></br><br></br><br></br><br></br><br></br><br></br>
<div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={founder}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Pranav Verma</b>
    <br></br>
    <l style={{color:'white'}}>Founder</l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img   style={{width:'10em',height:'12em'}} src={bd}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Venkatesh </b>
    <br></br>
    <l style={{color:'white'}}>BD Manager</l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={events}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Anirban Das</b>
    <br></br>
    <l style={{color:'white'}}>Head of Events</l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={CLB}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Raghavendra</b>
    <br></br>
    <l style={{color:'white'}}>Community Lead </l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={technology}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Shubhaam Tiwary</b>
    <br></br>
    <l style={{color:'white'}}>Head of Technology</l>
    </center>
    </div >
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={design}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Harsh Vaja</b>
    <br></br>
    <l style={{color:'white'}}>Head of Design</l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={advisor}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Manoj Jain</b>
    <br></br>
    <l style={{color:'white'}}>Advisor</l>
    </center>
    </div>
    <div style={{border:'1px solid violet', margin:'2em',borderRadius:'5px'}} data-aos="flip-up">
    <img  style={{width:'10em',height:'12em' }} src={founder}></img>
    <br></br>
    <center>
    <b style={{color:'white'}}>Pranav Verma</b>
    <br></br>
    <l style={{color:'white'}}>Founder</l>
    </center>
    </div>
    


    </div>
</div>

</center>
  <br></br>

<br></br>


    <br></br>
    <br></br>
<div style={{color:'white'}}>
 
            </div>

            <div>
   
    </div>
   




    
    <br></br>
    <br></br>
<div id="about"></div>

    
    
     


 </div>
 <br></br>





 
   
    <center>

    
      
<br></br>


<div style={{backgroundColor:'black'}}> 

<br></br>


<hr style={{backgroundColor:'white', color:'white'}}></hr>

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

export default Home



