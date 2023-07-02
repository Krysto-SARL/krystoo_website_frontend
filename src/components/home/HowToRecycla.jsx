import { Link } from 'react-router-dom'
import caledonianNature from '../../assets/caledonianNature.jpeg'

function HowToRecycla() {
  return (
    <section className='how-to-recycle-container'>
        <div className="image-container">
            <img src={caledonianNature} alt="" />
        </div>
        <div className="txt">
            <p>Grace à notre base de données qui grandit de jours en jours, rechercher un produit et découver son impact sur votre santé l'environement et comment faire en sorte qu'il soit correctement recyclé</p>
        <Link to={"/recyclage-et-santé"} className='btn btn-block'>Découvir</Link>
        </div>
    </section>
  )
}

export default HowToRecycla