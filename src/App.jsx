import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import RestaurantPage from './components/RestaurantPage';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/details' element={<RestaurantPage />} />

          
          
        </Routes>
      </main>
      <Footer />
        
      </Router>
      
      
      
      
    </div>
  );
}

export default App;
