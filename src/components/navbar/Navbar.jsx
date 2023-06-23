import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const showNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <header>
        <h3>Krysto</h3>
        <nav className={`nav ${isNavbarOpen ? 'responsive_nav' : ''}`}>
          <Link to={'/'}>Accueil</Link>
          <Link to={'/'}>Nos produits</Link>
          <Link to={'/'}>Nos services</Link>
          <Link to={'/'}>A propos</Link>
          <Link to={'/'}>Contact</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
