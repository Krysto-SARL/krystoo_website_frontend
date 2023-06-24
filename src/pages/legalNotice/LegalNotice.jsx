import './legalNotice.css'

function LegalNotice() {
  return (
    <main className="container container-notice">
      <h1>Mentions légales</h1>
      <div className="chapter">
        <h5>Informations générales</h5>
        <ul>
          <li>
            <p>
              {' '}
              <span>Société : </span> SARL Krysto
            </p>
            <p>
              {' '}
              <span>Adresse : </span>8 rue Higginson VDC
            </p>
            <p>
              {' '}
              <span>Téléphone : </span>(+687) 93 92 53
            </p>
            <p>
              {' '}
              <span>Email: </span> krysto.contact@gmail.com
            </p>
          </li>
        </ul>
      </div>
      <div className="chapter">
        <h5>Directeur de la publication</h5>
        <p>VELTEN Stoyann</p>
        <p>krysto.contact@gmail.com</p>
      </div>
      <div className="chapter">
        <h5>Hébergement</h5>
        <p>VELTEN Stoyann</p>
        <p>krysto.contact@gmail.com</p>
      </div>
      <div className="chapter">
        <h5>Propriété intellectuelle</h5>
        <p>
          Le contenu de ce site, y compris les textes, images, logos, et autres
          éléments graphiques, est protégé par les lois sur la propriété
          intellectuelle. Toute utilisation non autorisée du contenu du site est
          strictement interdite.
        </p>
      </div>
      <div className="chapter">
        <h5>Collecte et utilisation des données personnelles</h5>
        <p>
        Veuillez consulter notre politique de confidentialité pour plus d'informations sur la collecte et l'utilisation des données personnelles.
        </p>
      </div>
      <div className="chapter">
        <h5>Liens externes</h5>
        <p>
        Ce site peut contenir des liens vers des sites web tiers. Nous n'assumons aucune responsabilité quant au contenu ou à la politique de confidentialité de ces sites tiers.
        </p>
      </div>
      <div className="chapter">
        <h5>Limitation de responsabilité</h5>
        <p>
        Nous nous efforçons de fournir des informations précises sur ce site, mais nous ne pouvons pas garantir l'exactitude et l'exhaustivité de ces informations. Nous déclinons toute responsabilité en cas d'erreur ou d'omission dans les informations fournies sur ce site.
        </p>
      </div>
      <div className="chapter">
        <h5>Droit applicable et juridiction compétente</h5>
        <p>
        Ces mentions légales sont soumises au droit Francais. Tout litige relatif à l'utilisation de ce site sera de la compétence exclusive des tribunaux
        </p>
      </div>
    </main>
  )
}

export default LegalNotice
