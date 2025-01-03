import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Events from './Events';
import bgimg from './images/bgimg.jpeg'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    
       


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  </Router>
  );
}

export default App;
