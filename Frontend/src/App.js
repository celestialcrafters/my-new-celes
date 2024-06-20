import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurService from "./Components/OurService";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Feedback from './Pages/Feedback';
import About from './Pages/About';
import Nav from './Components/Nav';
import Proj from './project/project';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Proj/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}


