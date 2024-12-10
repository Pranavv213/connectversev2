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
import partners from './images/partners.png'
import aboutusimg from './images/aboutusimg.mp4'
import aboutus from './images/aboutus.png'
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
import homeimage from './images/homeimage.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
 <br></br>
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
      <img src={homeimage} class="homeimg"></img>
  
   
    
      <a href='https://calendly.com/quantumworld394/30min'><button class="button-85" role="button">Book a Call</button></a>
     
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
                <img style={{width:'15em'}} src={router}
                    alt="" />
                <img src={bharatbox}
                    alt="" />
                <img src={qoneqt}
                    alt="" />
                <img style={{width:'5em'}} src={graph}
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
<br></br>
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img style={{width:'90%'}} src={irl1}></img>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'90%'}}src={irl2}></img>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'90%'}} src={irl3}></img>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img style={{width:'90%'}} src={irl4}></img>
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'90%'}} src={irl5}></img>
      <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'90%'}} src={irl6}></img>
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

 <br></br><br></br>
 <h2 style={{color:'white'}}> Automate your onboarding process with ConnectVerse</h2>
<img style={{width:'20em'}} src={ai}></img>
<br></br>
<div id="pricing"></div>
<h2 style={{color:'white'}}> Pricing</h2>
<br></br>
  
  <div class="pricing" style={{color:'white'}}>
<div class="glass" style={{width:'20em',height:'30em', border: "1px solid white"}}>

<div class="pricing-header" style={{width:'100%',height:'5em',backgroundColor:'#8c52ff'}}>
<h3>Basic</h3>
</div>
<div class="pricing-content" style={{height:'20em'}}>
<div class="pricing-body">


<br/>
<h3>$3800</h3>
<br/>
  <h5>Workshop duration of 50 mins </h5>
  <br/>
  <h5>IRL Workshop in 25 Colleges </h5>
  <br/>
  <h5>Interact with over 2000 students </h5>
  



</div>
</div>
<a href='https://calendly.com/quantumworld394/30min'><button class="button-85" role="button">Book a Call</button></a>
</div>

&nbsp;&nbsp;
<div class="glass" style={{width:'20em',height:'30em', border: "1px solid white"}}>

<div class="pricing-header" style={{width:'100%',height:'5em',backgroundColor:'#8c52ff'}}>
<h3>Basic</h3>
</div>
<div class="pricing-content" style={{height:'20em'}}>
<div class="pricing-body">


<br/>
<h3>$3800</h3>
<br/>
  <h5>Workshop duration of 50 mins </h5>
  <br/>
  <h5>IRL Workshop in 25 Colleges </h5>
  <br/>
  <h5>Interact with over 2000 students </h5>
  



</div>
</div>
<a href='https://calendly.com/quantumworld394/30min'><button class="button-85" role="button">Book a Call</button></a>
</div>
&nbsp;&nbsp;
<div class="glass" style={{width:'20em',height:'30em', border: "1px solid white"}}>

<div class="pricing-header" style={{width:'100%',height:'5em',backgroundColor:'#8c52ff'}}>
<h3>Basic</h3>
</div>
<div class="pricing-content" style={{height:'20em'}}>
<div class="pricing-body">


<br/>
<h3>$3800</h3>
<br/>
  <h5>Workshop duration of 50 mins </h5>
  <br/>
  <h5>IRL Workshop in 25 Colleges </h5>
  <br/>
  <h5>Interact with over 2000 students </h5>
  



</div>
</div>
<a href='https://calendly.com/quantumworld394/30min'><button class="button-85" role="button">Book a Call</button></a>
</div>
</div>
 </div>
 
    

   
    <center>

      <br/><br></br>
      <div id="contact"></div>
 
<div style={{backgroundColor:'black'}}> 
<h2 style={{color:'white'}}>Contact</h2>  
<br></br>
<center>

  <br/>
  <input style={{width:'40%',height:'3em'}} placeholder="Enter Name"></input>
  <br/>
  <br/>
  <input style={{width:'40%',height:'3em'}} placeholder="Enter Company Name"></input>
  <br/>
  <br/>
  <textArea style={{width:'40%',height:'10em'}} placeholder="Description"></textArea>
  <br/>
  <br></br>
  <button style={{width:'40%',height:'3em'}} class="button-85" onClick={()=>{
    notify1()
  }}>Submit</button>
</center>
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



