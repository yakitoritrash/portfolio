import './App.css';
import Hero from './Hero';
import Page2 from './Page2';
import Page3 from './Page3';
import Netproject from './Netproject';
import MalwareBlog from './MalwareBlog'; // Import your MalwareBlog component
import Navbar from './Navbar'; // Assuming you have a Navbar component
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Awsvpn from './Awsvpn';

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
        </>
      )}

      <Routes>
        <Route path="/" element={<Page3 />} />
        <Route path="/network" element={<Netproject />} />
        <Route path="/blog/malware" element={<MalwareBlog />} />
        <Route path="/blog/aws-openvpn" element={<Awsvpn />} />
        <Route path="/blog/firewall-setup" element={<MalwareBlog />} />
      </Routes>
    </>
  );
}

export default App;