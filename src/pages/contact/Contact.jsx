import './contact.css'

function Contact() {
  return (
    <main className='container'>
        <h1>Une question ? Un projet ? <br /> Contactez-nous !</h1>
        <form className='form' action="">
            <div className="form-group">
                <select name="" id="">
                    <option value="">Objet de votre message</option>
                    <option value="">Devenir revendeur</option>
                    <option value="">Sensibilisations</option>
                    <option value="">Team buildings</option>
                    <option value="">Autres sujets</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Votre nom</label>
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