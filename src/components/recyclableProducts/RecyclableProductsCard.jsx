import React from 'react'
import { Link } from 'react-router-dom'
import './recyclableProductCard.css'

function RecyclableProductsCard({ product, link }) {
  return (
    <Link to={link}>
      <article className="recyclableProductcard">
        <h3>{product.marque}</h3>
        <h4>{product.designation}</h4>
        <div className="recyclableProductCardImg">

        <img
            src={`${process.env.REACT_APP_BASE_API_URL_IMAGE}${product.photo}`}
            alt=""
            />
            </div>
      </article>
    </Link>
  )
}

export default RecyclableProductsCard
