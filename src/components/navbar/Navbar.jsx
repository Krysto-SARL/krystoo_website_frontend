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
        <Link to={"/"}>
        <h3>Krysto</h3>
        </Link>
        <nav className={`nav ${isNavbarOpen ? 'responsive_nav' : ''}`}>
          <Link to={'/'}>Accueil</Link>
          <Link to={'/Nos-produits'}>Nos produits</Link>
          <Link to={'/Nos-services'}>Nos services</Link>
          <Link to={'/A-propos'}>A propos</Link>
          <Link to={'/Nous-contacter'}>Contact</Link>
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
