import './App.css';
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Page2 from './Page2';
import Page3 from './Page3';
import Netproject from './Netproject';
import MalwareBlog from './MalwareBlog'; // Import your MalwareBlog component
import Navbar from './Navbar'; // Assuming you have a Navbar component
import { HashRouter  as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Awsvpn from './Awsvpn';
import CloudProject from './Cloudproject';
import NtfyBlog from './Ntfyblog';
import Designproject from './Designproject';
import Everydayphotoshop from './Everydayphotoshop';
import Uptimekumablog from './Uptimekumablog';
import Page4 from './Page4';
import Blobcursor from './Blobcursor';
import Activedirectoryblog from './Activedirectoryblog';
import Loading from './Loading';
import HomeLabBlog from './HomelabBlog';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
      if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [hash]);

  return null;
};


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoading);

    return () => {
      window.removeEventListener('load', handleLoading);
    };
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
};

  return (
    <Router>
      <div className="App">
        {loading && <Loading onComplete={handleLoadingComplete} />}
      <Blobcursor />
        <Navbar />

        <div className='Main_Page'>
          <ScrollToHashElement />
          <ConditionalRoutes />
        </div>
        <Routes>
          <Route path="/network" element={<Netproject />} />
          <Route path="/cloud" element={<CloudProject />} />
          <Route path="/design" element={<Designproject />} />
          <Route path="/blog/malware-analysis-lab" element={<MalwareBlog />} />
          <Route path="/blog/aws-openvpn" element={<Awsvpn />} />
          <Route path="/blog/active-directory" element={<Activedirectoryblog />} />
          <Route path="/blog/ntfy-setup" element={<NtfyBlog />} />
          <Route path="/blog/everyday-photoshop" element={<Everydayphotoshop />} />
          <Route path="/blog/uptime-kuma-setup" element= {<Uptimekumablog />} />
          <Route path="/blog/home-lab" element= {<HomeLabBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalRoutes() {
  const location = useLocation(); // Get the current route
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <>
      {/* Conditionally render Hero and Page2 based on the current route */}
      {location.pathname === '/' && (
        <>
          <motion.div style={{ y: y1 }}>
            <Hero />
          </motion.div>
          <motion.div style={{ y: y2 }}>
            <Page2 />
          </motion.div>
            <Page3 />
            <Page4 />

        </> 
      )}

      {/* <Routes>
        <Route path='/about' Component={Page2} />
        <Route path="/" element={<Page3 />} />
        <Route path='/' element= {<Page4 />} />
      </Routes> */}
    </>
  );
}

export default App;