import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Layout from './components/utils/Layout';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path="/Mywebself/" element={
          <>
            <Navbar />
            <Layout />
          </>
        }>
          <Route path="" element={<LandingPage />} />
          <Route path="/Mywebself/about" element={<About />} />
          <Route path="/Mywebself/resume" element={<Resume />} />
          <Route path="/Mywebself/xp" element={<Experience />} />
          <Route path="/Mywebself/contact" element={<Contact />} />
        </Route>
      </Routes>
  )
}

export default App
