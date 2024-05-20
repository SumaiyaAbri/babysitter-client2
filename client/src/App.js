import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


import Registerbabysitter from './Components/Registerbabysitter.js';


import Contactnew from './Components/Contact copy.js';
import UpdateBabysitter from './Components/Updatebabysitter.js';

import Choosetime from './Components/chosetime.js';
import Market from './Components/market.js';



function App() {
  return (
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
   
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Contactnew />} />
        <Route path="/Registerbabysitter" element={<Registerbabysitter />} />
        <Route path="/updatebabysitter/:id" element={<UpdateBabysitter />} />
        
        <Route path='/market' element={<Market />} />
        <Route path="/selectpage/:id" element={<Choosetime />} />
      
        

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

      



    
 