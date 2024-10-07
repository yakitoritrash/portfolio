import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Hero from './Hero';
import Page2 from './Page2';
import Page3 from './Page3';
import Netproject from './Netproject';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ConditionalRoutes />
      </div>
    </Router>
  );
}

function ConditionalRoutes() {
  const location = useLocation(); // Get the current route

  return (
    <>
      {/* Conditionally render Hero and Page2 based on the current route */}
      {location.pathname === '/' && (
        <>
          <Hero />
          <Page2 />
        </>
      )}

      <Routes>
        <Route path="/" element={<Page3 />} />
        <Route path="/network" element={<Netproject />} />
      </Routes>
    </>
  );
}

export default App;
