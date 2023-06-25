import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'
import './home.css';

function Hero() {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section className="hero">
      <div className="hero_content">
        <animated.h1 style={titleAnimation}>
          Transformez vos déchets en trésors avec Krysto !
        </animated.h1>
        <h2>Clean, Create, Recycle, Repeat !</h2>
        <Link to="/Nos-produits" className="btn btn-primary">
          Découvrir
        </Link>
      </div>
    </section>
  );
}

export default Hero;
