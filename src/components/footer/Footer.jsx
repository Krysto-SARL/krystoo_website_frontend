
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>Nous contacter</h3>
          <ul>
            <li>Tel : (+687) 93.92.53</li>
            <li>Email : krysto.contact@gmail.com</li>
          
          </ul>
        </div>
        <div>
          <h3>Nous suivre</h3>
          <ul>
            <li>  <a href='https://www.facebook.com/Krysto.noumea'>Facebook</a>  </li>
            <li>linkedyn</li>
            <li>Discord</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3>Juridique</h3>
          <ul>
            <li>
                <a href={'/Mentions-légales'}>Mentions légales</a>
            </li>
            <li>Conditions générales de ventes</li>
            <li>Politique de confidentiatlités</li>
          </ul>
        </div>
      </div>
      <p>© 2023 Krysto. Tous droits réservés.</p>
    </footer>
  )
}

export default Footer
