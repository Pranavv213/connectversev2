import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Events from './Events';
import bgimg from './images/bgimg.jpeg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    
       


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      
    </Routes>
  </Router>
  );
}

export default App;
