import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Merch from './pages/Merch';
import Menu from './pages/Menu';
import Login from './pages/Login';
import About from './pages/About';
import PrivacyTerms from './pages/PrivacyTerms';
import Rewards from './pages/Rewards';
import Delivery from './pages/Delivery';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-terms" element={<PrivacyTerms />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;