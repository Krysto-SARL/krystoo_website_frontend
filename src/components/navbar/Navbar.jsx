import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaSignOutAlt, FaTimes } from 'react-icons/fa';
import './navbar.css';
import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const showNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const token = JSON.parse(localStorage.getItem("userToken"));
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <header className='header'>
        <Link to={"/"}>
        <h3>Krysto</h3>
        </Link>
        <nav className={`nav ${isNavbarOpen ? 'responsive_nav' : ''}`}>
          <Link to={'/'}>Accueil</Link>
          <Link to={'/Nos-produits'}>Nos produits</Link>
          <Link to={'/Nos-services'}>Nos services</Link>
          <Link to={'/A-propos'}>A propos</Link>
          <Link to={'/Nous-contacter'}>Contact</Link>

          {user ? (
          <>
          <Link to={'/private/home'}>Mon espace</Link>
        
            <button className="btn-logout" onClick={onLogout}>
              {" "}
              <FaSignOutAlt /> Deconnection 
            </button>
         
          </>
        ) : (
          <Link to={'/espace-client'}>Espace client</Link>
        )}


          
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
