import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';  
import HeroSection from './components/Home/HeroSection';
import Contact from './components/ContactUs/Contact';
// import MainNavbar from './components/MainNavbar/MainNavbar';

const App = () => {
  return (
    <Router>
      {/* <MainNavbar/> */}
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/' element={<HeroSection/>}/>
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
