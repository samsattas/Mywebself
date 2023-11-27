import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Layout from './components/utils/Layout';
import About from './pages/About';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Mywebself/" element={<>
          <Navbar />
          <Layout />
        </>}>
          <Route path="" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="pokedex" element={<Pokedex />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
