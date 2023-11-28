import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <><Navbar /><LandingPage /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>,
  },
  {
    path: "/resume",
    element: <><Navbar /><Resume /></>,
  },
  {
    path: "/xp",
    element: <><Navbar /><Experience /></>,
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
