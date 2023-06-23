import ecologicIcon from '../../assets/icones/Fichier 9.svg'
import recyclableIcon from '../../assets/icones/Fichier 5.svg'
import Icon from '../../assets/icones/Fichier 4.svg'

function About() {
  return (
    <section className="icons bg-light">
      <div className="flex-items">
      <div>
          <div className="icon-container">
            <img src={Icon} alt="" />
          </div>
          <h3>Ecologique</h3>
        </div>
        <div>
          <div className="icon-container">
            <img src={ecologicIcon} alt="" />
          </div>
          <h3>100% recyclable</h3>
        </div>
        <div>
          <div className="icon-container">
            <img src={recyclableIcon} alt="" />
          </div>
          <h3>100% recyclable</h3>
        </div>
        
      </div>
    </section>
  )
}

export default About
