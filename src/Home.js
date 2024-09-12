import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.avif'
import homeimg from './images/homeimg.png'
import bgvideo from './images/bgvideo.mp4'
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


function Home() {

    const [account,setAccount]=useState('Connect Wallet')
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const projectId = 'd1b8ecd12b45222ded58ecacaf0afcce'



  return (
    <div>
  

      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" fixed='top'>
      <Container>
      <Navbar.Brand href="#home"><img style={{width:'10em'}} src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

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

      <div className="video-container">
        <div id="home"></div>
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Other content can go here */}
      <div className="content">
        <br></br>  <br></br>  <br></br>
      <img className="homeimg" src={homeimg}/>
  <br/>


<a href='https://t.me/connectverseweb3'><button class="button-85" role="button">Join Community</button></a>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>


  {/* Carousal */}

  

      </div>
    </div>

    <div className="video-container" style={{backgroundColor:'black'}}>
      
      {/* Other content can go here */}
      <div className="content">
      <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
      <h1> Some of our Past Events</h1>
      </ScrollAnimation>
      <br></br>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={irl1}></img>
        <Carousel.Caption>
         6+ IRLs with Graph Protocol
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={irl2}></img>
        <Carousel.Caption>
         20+ IRls with Router Protocol
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={irl3}></img>
        <Carousel.Caption>
        20+ IRls with Inco Protocol
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={irl4}></img>
        <Carousel.Caption>
       Web3Utsav Roadshow
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={irl5}></img>
        <Carousel.Caption>
      Web3 Community Call
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={irl6}></img>
        <Carousel.Caption>
        IRL + Meetup
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

    
 
      </div>
    </div>
    <div  style={{backgroundColor:'black'}}>

   <br></br><br></br><br></br><br></br>
   </div>
    <div  style={{backgroundColor:'black'}}>
      
      {/* Other content can go here */}
      <div className="content">
  
  <ScrollAnimation  animateIn='flipInY'
  animateOut='flipOutY'>  <h1>Trusted By</h1>
  We are proud to collaborate with our esteemed partners.</ScrollAnimation>

  <br></br>
  
  <br></br>
 <Marquee>
<img className="partnerimg" style={{width:'70em'}} src={partnersimage}></img>
<img className="partnerimg" style={{width:'70em'}} src={partnersimage2}></img>
</Marquee>
 <br></br><br></br>
 <div id='contact'></div>
<a href='https://calendly.com/quantumworld394/30min'><button class="button-85" role="button">Book a Call</button></a>
<br></br><br></br>
      </div>
    </div>

    <div  style={{backgroundColor:'black'}}>
      
      {/* Other content can go here */}
      <div className="content">
  


  <br></br>
  <br></br>





      </div>
    </div>
 
    <div class="tweets"  style={{backgroundColor:'black'}}>
    <div style={{backgroundColor:'black',color:'white',paddingRight:'2em'}}>
    <ScrollAnimation  animateIn='flipInY'
  animateOut='flipOutY'>  <h1>Testimonials</h1>
  Check out some of the buzz on Twitter about the events we've hosted! 🥳
 </ScrollAnimation>
 </div>
<br></br>
<ScrollAnimation duration={3}
 animateIn='flipInY'
 animateOut='flipOutY'>
      <div style={{ display: 'flex', justifyContent: 'center' ,paddingRight:'2em'}}>
  <XEmbed url="https://x.com/ConnectVerse3/status/1772979373919932796" width={325} />
</div>
    </ScrollAnimation>
    <ScrollAnimation duration={3}
 animateIn='flipInY'
 animateOut='flipOutY'>
<div style={{ display: 'flex', justifyContent: 'center' ,paddingRight:'2em'}}>
  <XEmbed url="https://x.com/SuperRabbitsDAO/status/1767123410407342332" width={325} />
</div>
</ScrollAnimation>
<ScrollAnimation duration={3}
 animateIn='flipInY'
 animateOut='flipOutY'>
<div style={{ display: 'flex', justifyContent: 'center' ,paddingRight:'2em'}}>
  <XEmbed url="https://x.com/qoneqtapp/status/1762155926541504607" width={325} />
</div>
</ScrollAnimation>
<ScrollAnimation duration={3}
 animateIn='flipInY'
 animateOut='flipOutY'>
<div style={{ display: 'flex', justifyContent: 'center' ,paddingRight:'2em'}}>
  <XEmbed url="https://x.com/TheGraphIndia/status/1719741164134482123" width={325} />
</div>
</ScrollAnimation>
<ScrollAnimation duration={3}
 animateIn='flipInY'
 animateOut='flipOutY'>
<div style={{ display: 'flex', justifyContent: 'center' ,paddingRight:'2em'}}>
  <XEmbed url="https://x.com/TheGraphIndia/status/1718459249939152934" width={325} />
</div>
</ScrollAnimation>

</div>

   
    <center>
   
<div style={{backgroundColor:'black'}}> 
<br></br> <br></br> <br></br> <br></br>
    <iframe
src="https://www.chatbase.co/chatbot-iframe/dKPjWH2ngM-yLWxO0iOb4"
width="100%"
style={{height:'100%',minHeight:'700px'}}
frameborder="0"
></iframe>
<br></br>
<br></br><br></br><br></br><br></br>

<br></br><br></br><br></br><br></br>
<div style={{color:'white'}}>
Find Us On
<br></br><br></br><br></br>
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
