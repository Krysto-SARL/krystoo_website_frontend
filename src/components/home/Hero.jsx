import { Link } from 'react-router-dom'
import './home.css'

function Hero() {
  return (
    <section className='hero'>
        <div className="hero_content">

        <h1>Transformez vos déchets en trésors avec Krysto !</h1>
        <h2>Clean, Create, Recycle, Repeat !</h2>

        <Link to={'/Nos-produits'} className="btn btn-primary">Découvrir</Link>
        </div>
    </section>
  )
}

export default Hero