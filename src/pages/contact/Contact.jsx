import './contact.css';
import handLids from '../../assets/hands_lids.jpeg'

function Contact() {
  return (
    <main className='contact-container'>
        <div className="image-contact-container">

        <img src={handLids} alt="" />
        </div>
        
        <form className='form contact-form' action="">
        <h1 className='contact-title'>Une question ? Un projet ? <br /> Contactez-nous !</h1>
            <div className="form-group">
                <select name="" id="">
                    <option value="">Objet de votre message</option>
                    <option value="">Collecte de vos déchets</option>
                    <option value="">Devenir revendeur</option>
                    <option value="">Sensibilisations</option>
                    <option value="">Atelier de recyclage</option>
                    <option value="">Team buildings</option>
                    <option value="">Autres sujets</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Votre nom</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Votre prénom</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Entreprise</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Votre fonction dans l'entreprise</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Votre email</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="">Votre message</label>
               <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='btn btn-block btn-danger' type='submit'>Envoyer votre message</button>
        </form>
    </main>
  )
}

export default Contact