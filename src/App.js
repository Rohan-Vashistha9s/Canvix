import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';  
import HeroSection from './components/Home/HeroSection';
import Contact from './components/ContactUs/Contact';
import ProjectDetails from './components/Projects/ProjectDetails';
import Project from './components/Projects/Project';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<HeroSection/>}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/project/:id' element= {<ProjectDetails/>} />
        <Route exact path='/projects' element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
