import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './components/utils/Layout';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Layout />
        </>}>
          <Route path="" element={<LandingPage />} />
          {/* <Route path="pokedex" element={<Pokedex />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
