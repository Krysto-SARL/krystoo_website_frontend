import fish from '../../assets/fish_in_bottle.jpeg'
import paillettes from '../../assets/pailletes_1.jpeg'
import './home.css'

function Cases() {
  return (
    <section id="cases" className="cases flex-grid section-padding">
      <header className="section-header">
        <h2>Quelques chiffres sur le plastique</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, neque.
        </p>
      </header>

      <div className="row">
        <div className="column">
          <img src={fish} alt="" />
          <img src={paillettes} alt="" />
        </div>

        <div className="column">
          <img src={fish} alt="" />
          <img src={paillettes} alt="" />
        </div>

        <div className="column">
          <img src={fish} alt="" />
          <img src={paillettes} alt="" />
        </div>

        <div className="column">
          <img src={fish} alt="" />
          <img src={paillettes} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Cases
