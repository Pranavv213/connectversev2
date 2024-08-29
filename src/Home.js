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




function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  

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
<h1> Some of our Past Events</h1>

  {/* Carousal */}

  

      </div>
    </div>

    <div className="video-container" style={{backgroundColor:'black'}}>
      
      {/* Other content can go here */}
      <div className="content">
   
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
      
      {/* Other content can go here */}
      <div className="content">
  
 

  <h1>Some of Our Partners</h1>
  We are proud to collaborate with our esteemed partners.
  <br></br>
  <br></br>
<img className="partnerimg" src={partners}></img>
 
      </div>
    </div>

    
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={contact} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Other content can go here */}
      <div className="content">
  


  <br></br>
  <br></br>

<center>
    <div id='contact'></div>
    <a href='https://forms.gle/cvTuZig8Fy6m4caP6'><button class="button-56" role="button">Contact Us</button></a>

<br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
  <br></br><br></br>
 <img src={logo}></img>
  <h5>@2024 All Rights Reserved</h5>
</center>




      </div>
    </div>
   
      </div>
   
  )
}

export default Home
