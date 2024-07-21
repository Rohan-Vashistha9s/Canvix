import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';  
import HeroSection from './components/Home/HeroSection';
import Contact from './components/ContactUs/Contact';
import ProjectDetails from './components/Projects/ProjectDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HeroSection/>}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/project/:id' element= {<ProjectDetails/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
