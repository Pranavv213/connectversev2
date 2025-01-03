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


function About() {


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
     
     <br></br>  <br></br>  <br></br>  <br></br>

 
 
<div style={{color:'white'}}>
 
            </div>

            <div>
   
    </div>
   





    
    
     


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

export default About



