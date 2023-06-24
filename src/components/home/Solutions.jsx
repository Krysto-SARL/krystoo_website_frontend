import { Link } from 'react-router-dom'
import fiveR from '../../assets/plastic_bottle_in_ocean.jpeg'

function Solutions() {
  return (
    <section className="solutions flex-columns">
      <div className="row">
        <div className="column">
          <div className="colunm-1">
            <img src={fiveR} alt="" />
          </div>
        </div>
        <div className="column">
          <div className="column-1 bg-primary">
            <h4>Notre vision</h4>
            <h2>Le meilleur des déchet est celui que l'on ne produit pas !</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium animi harum, illo accusamus ullam nulla facere
              consectetur aspernatur non quisquam neque eos debitis nemo dolores
              consequatur fugiat hic cumque sunt quo soluta? Voluptas similique
              rem error asperiores modi ex magnam.
            </p>
            <button className="btn btn-outline">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
