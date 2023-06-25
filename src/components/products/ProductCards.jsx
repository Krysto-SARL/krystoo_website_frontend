import { Link } from 'react-router-dom';
import './productCard.css';

function ProductCards({ product , link }) {
  console.log(product);
  return (
    <Link to={link}>
    <article className="card">
      {product.photos && product.photos.length > 0 ? (
        <img
        src={`${process.env.REACT_APP_BASE_API_URL_IMAGES}${product.photos[0]}`}
        alt=""
        />
      ) : product.photo ? (
          <img
          src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${product.photo}`}
          alt=""
          />
          ) : (
              <img
              src="../../assets/no-image.png" // Remplacez "/path/to/default-image.jpg" par le chemin de votre image par défaut
              alt=""
              />
              )}

      <div className="info">
        <h3>{product.name}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dicta saepe tempore quos autem laboriosam quis nemo asperiores facilis
          quod?
        </p>
      </div>
    </article>
              </Link>
  );
}

export default ProductCards;
